export function handshakeController($scope, scopePayload, AnimationService, $rootScope, platform, $state, $interval, $timeout, $stateParams) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);

    $scope.handshakeSubLabel = ''; // Not currently in use

    $scope.$parent.segueControl = 'blocked';
    $scope.$parent.spinnerControl = 'hide';

    $scope.$parent.backgroundLoader = 'idle';

    $scope.payload.segueButton = $scope.payload.continueButton;

    $scope.loadingPercentage = 0;


    if ($scope.submittedData.wifi.ssid) {
        $scope.$parent.segueControl = 'ready';
        recoverPrevWiFi(); //On init recover prev wifi settings when going back
    }

    $scope.showPasswordToggle = 'password';
    $scope.forcePassword = false;


    $scope.ssidListener = function() {
        if ((typeof wifi_ssid.ssid.value !== "undefined") && wifi_ssid.ssid.value.length > 0) {
            $scope.$parent.segueControl = 'ready';
            $scope.payload.segueButton = $scope.payload.continueButton;
            $rootScope.$broadcast('removeError');
            $scope.submittedData.wifi.ssid = wifi_ssid.ssid.value;
        } else {
            $scope.$parent.segueControl = 'blocked';
        }
    };
    $scope.passwordListener = function() {
        $scope.submittedData.wifi.password = wifi_ssid.pass.value;
    };

    $scope.showPassword = function(tgl){
        if ($scope.forcePassword == true){
            return;
        }
        if (tgl == true) {
            $scope.showPasswordToggle = 'text';
        }
        else {
            $scope.showPasswordToggle = 'password';
        }
    };

    $scope.forceShowPassword = function(){
        if ( $scope.forcePassword == false){
            $scope.forcePassword = true;
            $scope.showPasswordToggle = 'text';
            console.log('showing');
        }
        else {
            $scope.forcePassword = false;
            $scope.showPasswordToggle = 'password';
            console.log('hide');
        }
    };


    /** -- Handshake Action-- **/
    var gamma = 2.0;
    var levelNum = 9;
    var MIN = 0;
    var MAX = levelNum - 2;
    var REPEAT = levelNum - 1;
    var previousDigit = levelNum + 1;
    var checksum = 0;
    var period = 170;
    var queue = [];
    var payload = "";
    var index = 0;
    var myInterval;
    var lightElement = document.getElementById('handShakeSpace');

    var currentLocation = 0;
    function increasePercentage(){
        currentLocation += 1;
        $scope.loadingPercentage = (currentLocation / (payload.length * 4) * 100 );
        return (currentLocation / (payload.length * 4) * 100 );
    };

    function getColor(value, levelNum) {
        var previous = (value * (255.0 / (levelNum - 1)));
        var final = 255.0 * Math.pow((previous / 255.0), (1.0 / gamma));
        return 'rgb(' + Math.round(final) + ',' + Math.round(final) + ',' + Math.round(final) + ')';
    }
    // Fills div with the requested color value
    function paint(colorValue) {
        lightElement.style.setProperty('background-color', getColor(colorValue, levelNum));
        console.log(increasePercentage());
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

    function start(t, callback) {
        if (t) {
            myInterval = $interval(function() {
                paint(queue[index]);
                index = index + 1;
                if (index >= queue.length) {
                    $interval.cancel(myInterval);
                    start(false, callback);
                }
            }, period);
        } else {
            $interval.cancel(myInterval);
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
        $scope.$parent.payload.handshakeLabel = ' ';
        lightElement.style.setProperty('background-color', 'rgb(0, 0, 0)');

        $scope.$parent.backgroundLoader = 'start';



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
    $scope.$on('handshake', function() {
        blockSegue();

        platform.listenToken($scope.submittedData.deviceData.device_token, $scope);

        $scope.$on('token', function(e, data) {
            console.log("Token received...");
            prepSegue();
        });

        load(function() {
            waitSegue();
            $scope.$parent.handShakeRepeats++;
            console.log($scope.$parent.handShakeRetries);
            console.log("Light process done...");
            $scope.loadingPercentage = 100;
            $scope.watchDog = $timeout(function() {
                blockError();
            }, 20000);
        });
    });

    // Starts the handshake
    function blockSegue() {
        $scope.payload.segueButton = 'SEND';
        $scope.$parent.segueControl = 'hide';
        $scope.$parent.spinnerControl = 'show';
    }

    //  Handshake finishes and waits for the platform

    function waitSegue() {
        animateHandshakeLabel('Done! Please wait...');
        lightElement.style.setProperty('background-color', '#2E3439');
        $scope.$parent.handShakeState = true;
        $scope.handshakeLabel = 'Done! Please wait...';

        $scope.payload.segueButton = $scope.payload.waitLabel;

        $scope.$parent.spinnerControl = 'hide';
        $scope.$parent.segueControl = 'blocked';

        $scope.$parent.segueControl = 'blocked';
    }

    //  Platform replies and we move forward

    function prepSegue() {
        animateHandshakeLabel(false);
        $scope.$parent.handShakeRepeats = 0;
        if ($scope.watchDog) $timeout.cancel($scope.watchDog);
        $scope.payload.segueButton = $scope.payload.continueButton;
        $scope.$parent.segueControl = 'ready';
        $scope.$parent.spinnerControl = 'hide';
        $rootScope.$broadcast('forceSegue', { target: 'wizard.confirm_handshake', params: {lang: $stateParams.lang}});
    }

    //  Platform doesn't reply and we show error for a few seconds

    function blockError() {
        animateHandshakeLabel(false);
        $scope.$parent.handShakeState = false;
        if ($scope.$parent.handShakeRepeats > $scope.$parent.handShakeRetries) {
            $scope.$parent.handshakeFailed();
        } else {
            backToWiFi();
        }
        var listenModal = $scope.$on('modalClosed', function() {
            setTimeout(function() {
                listenModal();
                backToWiFi();
            }, 200);
        });
    }

    function backToWiFi() {
        $scope.payload.segueButton = $scope.payload.continueButton;
        $scope.$parent.segueControl = 'ready';
        //WIZARD OF OZZ
        //$rootScope.$broadcast('forceSegue', { target: 'wizard.confirm_handshake'});
        $state.go('wizard.wifi_check', {lang: $stateParams.lang});
    }

    function animateHandshakeLabel(val){
        if (val) {
            $scope.dots = 0;
            $scope.dotsTimer = $interval(function(){
                $scope.dots ++;
                if($scope.dots > 3) $scope.dots = 0;
                $scope.handshakeLabel = val + new Array($scope.dots  + 1).join('.');
            }, 350);
        } else {
            $interval.cancel($scope.dotsTimer);
        }
    }

    function recoverPrevWiFi() {
        setTimeout(function() {
            if (typeof wifi_ssid !== "undefined") {
                wifi_ssid.ssid.value = ($scope.submittedData.wifi.ssid) ? $scope.submittedData.wifi.ssid : '';
                wifi_ssid.pass.value = ($scope.submittedData.wifi.password) ? $scope.submittedData.wifi.password : '';
                $scope.$parent.segueControl = 'ready';
                $scope.payload.segueButton = $scope.payload.continueButton;
                $rootScope.$broadcast('removeError');
            }
        }, 0); // This is a trick for ng render cycle
    }

    $scope.alternateSegue = function () {
        $rootScope.$broadcast('forceSegue', { target: 'wizard.choose_connection', params: {lang: $stateParams.lang}});
    };

}

handshakeController.$inject = ['$scope', 'scopePayload', 'AnimationService', '$rootScope', 'platform', '$state', '$interval', '$timeout', '$stateParams'];
