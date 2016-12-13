'use strict';

angular.module('app').controller('wizardCtrl', function($scope, $location, $sce, $window, $timeout, SegueService, $rootScope, AnimationService, session, platform, Restangular, $state) {

    $scope.spinnerControl = 'hide';

    /** Submitted User Data **/
    $scope.submittedData = {};

    $scope.submittedData.wifi = {};

    $scope.submittedData.user = {};

    $scope.submittedData.deviceData = {
        device_token: session.device_token,
        description: 'Making Sense Pilot #1',
        exposure: 'outdoor',
        kit_id: 11,
        user_tags: ["MakingSense", "Barcelona", "BarcelonaNoise", "MS1"] //We currently use defualt tags
    }

    $scope.onboarding_session = session.onboarding_session;

    $scope.pre_made = false; // Check this

    $scope.modalClass = 'hidden';

    $scope.handShakeState = false;
    $scope.handShakeRepeats = 0;
    $scope.handShakeRetries = 4;

    /** Base Navigation  **/
    $scope.seque = function() {
        console.log($scope.payload.template);
        if ($scope.segueControl == 'ready') {
            switch ($scope.payload.template) {
                case 'handshake':
                    if ($scope.handShakeState == false) {
                        $rootScope.$broadcast('handshake'); // This starts the light
                    } else {
                        sequeTransition(); // This moves to next
                    }
                    break;
                case 'final':
                    // $window.open('https://smartcitizen.me/kits/' + $scope.submittedData.deviceData.id, '_blank');
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
            $rootScope.$broadcast('no'); //?
            backTransition();
        }
    };


    /** Aux Navigation **/

    function sequeTransition() {
        AnimationService.leaving(true);
        $scope.payload.progressShow = 'blue';
        $timeout(function() {
            $location.path('/wizard/' + SegueService.nextPage($scope.payload.index, $scope.pre_made));
            $window.scrollTo(0, 0);
            $scope.payload.progressShow = ' ';
        }, 500); // see animations max duration time
    }
    $scope.$on('forceSegue', function (event, args) {
        console.log(args.target);
        AnimationService.leaving(true);
        $scope.payload.progressShow = 'blue';
        $timeout(function() {
            $state.go(args.target);
            $window.scrollTo(0, 0);
            $scope.payload.progressShow = ' ';
        }, 500); // see animations max duration time
    });

    function backTransition() {
        //debugger;
        AnimationService.leaving(false);
        $scope.payload.progressShow = 'blue';
        $timeout(function() {
            $scope.segueControl = 'ready';
            //debugger;
            $location.path('/wizard/' + SegueService.previousPage($scope.payload.index, $scope.pre_made));
            $window.scrollTo(0, 0);
            $scope.payload.progressShow = ' ';
        }, 500); // see animations max duration time
    }

    function handleError() {
        console.log($scope.payload.template);
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
        var data = {
            title: "Uh oh",
            body: "It seems like you are missing parts of the kit. If that’s so, let’s notify the team and they’ll get back to you as soon as possible",
            image: "app/images/alert.svg",
            button: "Notify the team!",
            action: "email"
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

    /** -- MODAL-- **/

    $scope.modalClick = function() {
        $scope.modalClass = 'out';
        $timeout(function() {
            $scope.modalClass = 'hidden';
            $rootScope.$broadcast('modalClosed'); // This starts the light
        }, 500);
    };
    $scope.modalButtonClick = function() {
        if ($scope.modalContent.action == 'email') $window.open('mailto:feedback-4873-IVVSumgXA4EEA4e7blwZvyE2sshIpRRK@feedback.doorbell.io?Subject=MakingSense Support [' + $scope.onboarding_session + ']', '_blank');
        else if ($scope.modalContent.action == 'retry') $scope.seque;
    };
    $scope.$on('modal', function() {
        $scope.modalClass = 'showing';
    });

    Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
        if ([422, 403, 404].indexOf(response.status) > -1) {
            console.warn(response);
            return true; // We don't catch errors 422 and 403 since we use them on user login
        } else {
            console.error(response);
            $scope.serverFailed(); // We trigger a modal
            return false;
        }
    });

});