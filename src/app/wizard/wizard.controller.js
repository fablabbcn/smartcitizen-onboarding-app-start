export function wizardController($scope, $location, $sce, $window, $timeout, SegueService, $rootScope, AnimationService, session, platform, Restangular, $state, $stateParams, hotkeys) {

    /** Cutomizable options **/

    $scope.submittedData = {};

    $scope.submittedData.deviceData = {
        device_token: session.device_token,
        description: 'iSCAPE Citizen Kit',
        exposure: 'outdoor',
        kit_id: 20
    };

    $scope.proposed_user_tags_array = ["Atencio"];

    $scope.handShakeState = false;
    $scope.handShakeRepeats = 0;
    $scope.handShakeWatchDog = 20 * 1000;
    $scope.apModeWatchDog = 60 * 1000;
    $scope.platformUrl = 'https://smartcitizen.me/kits/';

    /** End of cutomizable options options **/

    $scope.submittedData.wifi = {};

    $scope.submittedData.user = {};

    $scope.onboarding_session = session.onboarding_session;

    $scope.disabled = false;

    $scope.spinnerControl = 'hide';

    $scope.pre_made = false; // Check this

    $scope.modalClass = 'hidden';

    console.log('Your session:' , session);
    console.log('Your device:', $scope.submittedData.deviceData);

    hotkeys.add({
        combo: 'alt+ctrl+j+p',
        description: 'Goes to slide 19',
        callback: function() {
          goTransition('wizard.choose_connection')
        }
    });

    hotkeys.add({
        combo: 'right',
        description: 'Go next',
        callback: function() {
           $scope.seque();
        }
    });

    hotkeys.add({
        combo: 'left',
        description: 'Go back',
        callback: function() {
           $scope.back();
        }
    });

    /** Base Navigation  **/
    $scope.seque = function() {

        if ($scope.segueControl == 'ready') {
          console.log('Next state:', $scope.payload.template);
            switch ($scope.payload.template) {
                case 'handshake':
                    if ($scope.handShakeState == false) {
                        $rootScope.$broadcast('handshake'); // This starts the light
                    } else {
                        sequeTransition(); // This moves to next
                    }
                    break;
                case 'final':
                    $window.open($scope.platformUrl + $scope.submittedData.deviceData.id, '_blank');
                    break;
                case 'sensorName':
                    platform.updateDevice($scope.submittedData.deviceData).then(sequeTransition);
                    break;
                case 'location_map':
                    platform.updateDevice($scope.submittedData.deviceData).then(sequeTransition);
                    break;
                case 'location_tags':
                    platform.updateDevice($scope.submittedData.deviceData).then(sequeTransition);
                    break;
                case 'chooseConnection':
                    sequeTransition($scope.nextState);
                    break;
                default:
                    sequeTransition();
                    break;
            }
        } else {
            handleError();
        }
    };

    $scope.back = function() {
        if ($scope.payload.backBlock != 'blocked') {
            //compare templates
            $scope.disabled = false;
            $rootScope.$broadcast('no'); //?
            backTransition();
        }
    };


    /** Aux Navigation **/

    function sequeTransition(nextState) {
        AnimationService.leaving(true);
        $scope.payload.progressShow = 'blue';
        $timeout(function() {
            SegueService.nextPage($scope.pre_made, nextState);
            $window.scrollTo(0, 0);
            $scope.payload.progressShow = ' ';
        }, 500); // see animations max duration time
    }

    function goTransition(stateName) {
        AnimationService.leaving(true);
        $scope.payload.progressShow = 'blue';
        $timeout(function() {
            $state.go(stateName);
            $window.scrollTo(0, 0);
            $scope.payload.progressShow = ' ';
        }, 500); // see animations max duration time
    }

    $scope.$on('forceSegue', function (event, args) {
        console.log(args.target);
        AnimationService.leaving(true);
        $scope.payload.progressShow = 'blue';
        $timeout(function() {
            $state.go(args.target, args.params);
            $window.scrollTo(0, 0);
            $scope.payload.progressShow = ' ';
        }, 500); // see animations max duration time
    });

    function backTransition() {
        AnimationService.leaving(false);
        $scope.payload.progressShow = 'blue';
        $timeout(function() {
            $scope.segueControl = 'ready';
            $scope.disabled = false;
            console.log('Prev slide:', $scope.payload.index);
            SegueService.previousPage($scope.pre_made);
            $window.scrollTo(0, 0);
            $scope.payload.progressShow = ' ';
        }, 500); // see animations max duration time
    }

    function handleError() {
        console.log('User error:', $scope.payload.template);
        if (
            ($scope.payload.template == 'wifi_enter') ||
            ($scope.payload.template == 'sensorName') ||
            ($scope.payload.template == 'account1') ||
            ($scope.payload.template == 'login') ||
            ($scope.payload.template == 'make1') ||
            ($scope.payload.template == 'make2')
        ) {
            $scope.segueControl = 'error';
            $timeout(function() {
                $scope.payload.segueButton = $scope.payload.segueButtonError;
            }, 250);
            return;
        }
        else if ($scope.payload.template == 'handshake') {
            return; // We currently don't use errors for handshake
        }
        else if ($scope.payload.template == 'location_prep') {
            return; // We currently don't use errors for location_prep
        }
        else if ($scope.payload.url == 'ap_final'){
            return; // We currently don't use errors for ap_final
        }
        $scope.segueControl = 'error';
        $scope.errorButton = 'show';
        $rootScope.$broadcast('blockedSegue');
        $timeout(function() {
            $scope.payload.segueButton = $scope.payload.segueButtonError;
        }, 250); //half of animation time defined in _navigation.scss
    }

    $scope.$on('removeError', function() {
        removeError();
    });

    function removeError() {
        $scope.errorButton = '';
    }

    $scope.no = function() {
        $rootScope.$broadcast('no');
    };

    $scope.yes = function() {
        $scope.modalBox = 'red';
        var data = SegueService.modalBox(0,$scope.lang);
        $scope.modalContent = data;
        $rootScope.$broadcast('modal');
    };

    $scope.kitRegisterFailed = function() {
        $scope.modalBox = 'red';
        var data = {
            title: "Uh oh",
            body: "It seems there was a problem while registering your kit! Sorry, you need to restart the process.",
            button: "Restart the process!",
            action: "restart"
        };
        $scope.modalContent = data;
        $rootScope.$broadcast('modal');
    };

    $scope.handshakeFailed = function() {
        $scope.modalBox = 'red';
        var data = {
            title: "Uh oh",
            body: "It seems like your kit can't connect to the internet after several retries. Please, check your Wi-Fi router!",
            button: "Notify the team!",
            action: "email"
        };
        $scope.modalContent = data;
        $rootScope.$broadcast('modal');
    };

    $scope.serverFailed = function() {
        $scope.modalBox = 'red';
        var data = {
            title: "Uh oh",
            body: "It seems we can't talk to the Smart Citizen platform. Please, check your internet connection!",
            button: "Retry",
            action: "retry"
        };
        $scope.modalContent = data;
        $rootScope.$broadcast('modal');
    };

    $scope.resetEmailSent = function() {
        $scope.modalBox = 'green';
        var data = {
            title: "Email sent!",
            body: "We have sent the email out! Check out your email in a new tab then return to put in your new password!",
            button: "Ok",
            action: "retry"
        };
        $scope.modalContent = data;
        $rootScope.$broadcast('modal');
    };

    /** -- MODAL-- **/

    $scope.modalClick = function() {
        $scope.modalClass = 'out';
        $timeout(function() {
            $scope.modalClass = 'hidden';
            $rootScope.$broadcast('modalClosed'); // This starts the light
        }, 500);
    };
    $scope.modalButtonClick = function() {
        switch ($scope.modalContent.action) {
            case 'email':
                $window.open('mailto:feedback-4873-IVVSumgXA4EEA4e7blwZvyE2sshIpRRK@feedback.doorbell.io?Subject=MakingSense Support [' + $scope.onboarding_session + ']', '_blank');
                break;
            case 'retry':
                $scope.seque;
                break;
            case 'restart':
                $state.go('wizard.landing');
                break;
            default:
                $scope.seque;
                break;
        }
    };

    $rootScope.$on('modal', function() {
        console.log('modal');
        $scope.modalClass = 'showing';
    });

    Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
        if ([204, 422, 403, 404].indexOf(response.status) > -1) {
            return true; // We don't catch errors 422 and 403 since we use them on user login
        } else {
            $scope.serverFailed(); // We trigger a modal
            return false;
        }
    });

}

wizardController.$inject = ['$scope', '$location', '$sce', '$window', '$timeout', 'SegueService', '$rootScope', 'AnimationService', 'session', 'platform', 'Restangular', '$state', '$stateParams', 'hotkeys'];
