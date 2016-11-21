'use strict';
/**
 * Created by Lucian on 10/14/16.
 */
angular.module('app').controller('handshakeController', function($scope, scopePayload, AnimationService, $rootScope, platform, $state) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);

    $scope.handshakeLabel = 'Place Kit Here';

    $scope.$parent.segueControl = 'blocked';
    //$scope.$parent.segueControl = 'ready';

    if ($scope.submittedData.wifi.ssid) {
        $scope.$parent.segueControl = 'ready';
    }

    $scope.showPasswordToggle = 'password';

    $scope.ssidListener = function(){
        if ( (typeof wifi_ssid.ssid.value !== "undefined") &&  wifi_ssid.ssid.value.length > 0)
        {
            $scope.$parent.segueControl = 'ready';
            $scope.payload.segueButton = 'CONTINUE';
            $rootScope.$broadcast('removeError');
            $scope.submittedData.wifi.ssid = wifi_ssid.ssid.value;
        } else {
            $scope.$parent.segueControl = 'blocked';
        }
    };
    $scope.passwordListener = function(){
        $scope.submittedData.wifi.password = wifi_ssid.pass.value;
    };

    $scope.showPassword = function(){
        if ($scope.showPasswordToggle == 'password') {
            $scope.showPasswordToggle = 'text';
        }
        else {
            $scope.showPasswordToggle = 'password';
        }
    };


    /** -- Handshake Action-- **/
    var gamma = 2.0;
    var levelNum = 9;
    var MIN = 0;
    var MAX = levelNum -2;
    var REPEAT = levelNum -1;
    var previousDigit = levelNum + 1;
    var checksum = 0;
    var period = 170;
    var queue = [];
    var payload = "";
    var index = 0;
    var myInterval;
    var lightElement = document.getElementById('handShakeSpace');
    function getColor(value, levelNum) {
        var previous = (value * (255.0/(levelNum - 1)));
        var final = 255.0 * Math.pow((previous / 255.0), (1.0 / gamma));
        return 'rgb('+Math.round(final)+','+Math.round(final)+','+Math.round(final)+')';
    }
    // Fills div with the requested color value
    function paint(colorValue) {
        lightElement.style.setProperty('background-color', getColor(colorValue, levelNum));
    };
    function outDigit(digit) {
        digit = parseInt(digit);
        if (digit == previousDigit) {
            previousDigit = levelNum + 1;
            queue.push(REPEAT);
        } else {
            queue.push(digit);
            previousDigit = digit
        }
    };
    function ramp(valores) {
        for (var i = 0; i < valores; i++) {
            queue.push(i);
        }
    };
    function sendChar(char) {
        checksum = checksum + char.charCodeAt(0);
        char = char.charCodeAt(0).toString(8);
        while (char.length < 3) {
            char = "0".concat(char)
        }
        for (var i = 0; i < char.length; i++) {
            outDigit(char[i]);
        }
    }
    function setWord(word) {
        payload = payload.concat(word);
        for (var i = 0; i < word.length; i++) {
            sendChar(word[i]);
        }
    }
    function sendChecksum() {
        var toSend = checksum.toString(8);
        while (toSend.length < 6) {
            toSend = "0".concat(toSend);
        }
        for (var i = 0; i < toSend.length; i++) {
            outDigit(toSend[i]);
        }
        console.log("checksum: " + toSend);
    }
    function start(t, callback){
        if (t) {
            myInterval = window.setInterval(function() {
                paint(queue[index]);
                index = index + 1;
                if (index >= queue.length) {
                    window.clearInterval(myInterval);
                    start(false, callback);
                }
            }, period );
        } else {
            window.clearInterval(myInterval);
            paint(MIN);
            callback();
        }
    }
    function INIT() {
        queue.push(MAX, REPEAT);
        ramp(levelNum);
        queue.push(MIN, REPEAT, MIN, REPEAT);
    }
    function STX() {
        outDigit(0);
        outDigit(0);
        outDigit(2);
    }
    function newLine() {
        outDigit(0);
        outDigit(1);
        outDigit(2);
    }
    function ETX() {
        outDigit(0);
        outDigit(0);
        outDigit(3);
    }
    function EOT() {
        outDigit(0);
        outDigit(0);
        outDigit(4);
    }
    function load(callback) {
        $scope.handshakeLabel = ' ';
        lightElement.style.setProperty('background-color', 'rgb(0, 0, 0)');

        queue = [];
        payload = "";
        checksum = 0;
        index = 0;
        
        INIT();
        STX();

        console.log($scope.submittedData.wifi.ssid);
        console.log($scope.submittedData.wifi.password);
        console.log($scope.submittedData.deviceData.device_token);

        setWord("auth\n");
        setWord($scope.submittedData.wifi.ssid + "\n"); 
        setWord($scope.submittedData.wifi.password + "\n");
        setWord($scope.submittedData.deviceData.device_token + "\n");

        ETX();
        sendChecksum();
        EOT();

        start(true, callback);
    };

    // On handshake event from wizard controller trigger process (Check this, it might change...)
    $scope.$on('handshake', function(){ 
        blockSegue();

        platform.listenToken($scope.submittedData.deviceData.device_token, $scope);

        $scope.$on('token', function(e, data) { 
            console.log("Token received...");
            $state.go('wizard.confirm_handshake'); 
            clearInterval($scope.watchDog);
            prepSegue();
        });

        load(function(){
            // Here watch dog timer to ask user to restart the process when no answer from platform...
            waitSegue();
            console.log("Light process done...");
            $scope.watchDog = setTimeout(function() {
                $scope.waitForResart = setTimeout(function() {
                    blockRestart();
                }, 3000);
                // Function below do not work! It seems a angular DOM bind issue after blinking the div...
                lightElement.style.setProperty('background-color', '#EF5854');
                $scope.handshakeLabel = "The kit can't connect. Check your wifi settings..."; 
                prepSegue(); //This is temporary for demo to jump no next step if you have trouble
            }, 10000);
        });
    });

    /* Check this */

    function waitSegue(){
        lightElement.style.setProperty('background-color', '#61CD72');
        $scope.$parent.handShakeState = true;

        // Function below do not work! It seems a angular DOM bind issue after blinking the div...
        $scope.handshakeLabel = 'Done! Please, wait'; 
        $scope.payload.segueButton = 'WAIT';
        $scope.$parent.segueControl ='ready';
    }

    function prepSegue(){
        if ($scope.waitForResart) clearInterval($scope.waitForResart); //This is temporary for demo to jump no next step if you have trouble
        $scope.payload.segueButton = 'CONTINUE';
        $scope.$parent.segueControl ='ready';
    }

    function blockSegue(){
        $scope.payload.segueButton = 'SENDING';
        $scope.$parent.segueControl ='blocked';
    }

    function blockRestart(){
        $scope.$parent.handShakeState = false;
        $scope.payload.segueButton = 'CONTINUE';
        $scope.$parent.segueControl ='ready';
        $state.go('wizard.wifi_enter'); 
    }

});