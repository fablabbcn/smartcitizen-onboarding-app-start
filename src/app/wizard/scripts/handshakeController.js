/**
 * Created by Lucian on 10/14/16.
 */
angular.module('app').controller('handshakeController', function($scope, scopePayload, AnimationService, $rootScope) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);

    $scope.$parent.segueControl = 'blocked';
    //$scope.$parent.segueControl = 'ready';

    if ($scope.submittedData.wifi_ssid) {
        $scope.$parent.segueControl = 'ready';
    }

    $scope.showPasswordToggle = 'password';

    $scope.ssidListener = function(){
        if ( (typeof wifi_ssid.ssid.value !== "undefined") &&  wifi_ssid.ssid.value.length > 0)
        {
            $scope.$parent.segueControl = 'ready';
            $scope.payload.segueButton = 'CONTINUE';
            $rootScope.$broadcast('removeError');
            $scope.submittedData.wifi_ssid = wifi_ssid.ssid.value;
        } else {
            $scope.$parent.segueControl = 'blocked';
        }
    };
    $scope.passwordListener = function(){
        $scope.submittedData.wifi_password = wifi_ssid.pass.value;
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
    var period = 120;
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
        if (index > 18){
            if ((index - 18) % 3 == 0) {
                var div = document.getElementById('output');
                div.innerHTML = div.innerHTML.concat(payload.slice(0,1));
                payload = payload.slice(1, payload.length);
            }
        }
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
    function sendWord(word) {
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
    function start(){
        if (document.getElementById("start").value == "Start") {
            document.getElementById("start").value = "Stop";
            document.getElementById('output').innerHTML = "";
            console.log(queue);
            myInterval = window.setInterval(function() {
                paint(queue[index]);
                index = index + 1;
                if (index >= queue.length) {
                    window.clearInterval(myInterval);
                    start();
                }
            }, period );
        } else {
            document.getElementById("start").value = "Start";
            window.clearInterval(myInterval);
            paint(MIN);
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
    function load() {
        queue = [];
        payload = "";
        checksum = 0;
        index = 0;
        INIT();
        STX();

        sendWord("auth\n");
        sendWord($scope.submittedData.wifi_ssid + "\n"); //We should validate text input here
        sendWord($scope.submittedData.wifi_password + "\n");
        sendWord(document.getElementById("TOKEN").value + "\n");

        ETX();
        sendChecksum();
        EOT();
        start();
    };

    $scope.$on('handshake', function(){
        console.log($scope.submittedData);
        load();
    });
});