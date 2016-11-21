'use strict';

angular.module('app').controller('wizardCtrl', function($scope, $location, $sce, $window, $timeout, SegueService, $rootScope, AnimationService, session, platform, Restangular) {

    /** Submitted User Data **/
    $scope.submittedData = {};

    $scope.submittedData.wifi = {};

    $scope.submittedData.user = {};

    $scope.submittedData.deviceData = {
        device_token: session.device_token,
        description: 'Making Sense Pilot #1',
        exposure: 'outdoor',
        kit_id: 11,
        user_tags: ["MakingSense", "Barcelona"] //We currently use defualt tags
    }

    $scope.onboarding_session = session.onboarding_session;

    $scope.pre_made = false; // Check this

    $scope.modalClass = 'hidden';

    $scope.handShakeState = false;

    /** Base Navigation  **/
    $scope.seque = function() {
        if ($scope.segueControl == 'ready') {
            switch ($scope.payload.template) {
                case 'handshake':
                    console.log($scope.handShakeState);
                    if ($scope.handShakeState == false) {
                        $rootScope.$broadcast('handshake');
                    } else {
                        sequeTransition();
                    }
                    break;
                case 'final':
                    $window.open('https://smartcitizen.me/kits/' + $scope.submittedData.deviceData.id, '_blank');
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
        $timeout(function() {
            $location.path('/wizard/' + SegueService.nextPage($scope.payload.index, $scope.pre_made));
            $window.scrollTo(0, 0);
        }, 500); // see animations max duration time
    }

    function backTransition() {
        AnimationService.leaving(false);
        $timeout(function() {
            $scope.segueControl = 'ready';
            $location.path('/wizard/' + SegueService.previousPage($scope.payload.index, $scope.pre_made));
            $window.scrollTo(0, 0);
        }, 500); // see animations max duration time
    }

    function handleError() {
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
        }, 500);
    };
    $scope.modalButtonClick = function() {
        if ($scope.modalContent.action == 'email') $window.open('mailto:support@smartcitizen.me?Subject=SmartCitizen Support [' + $scope.onboarding_session + ']', '_blank');
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