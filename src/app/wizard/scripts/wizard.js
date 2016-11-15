'use strict';

angular.module('app').controller('wizardCtrl', function ($scope, $location, $sce, $window, $timeout, SegueService, $rootScope, AnimationService) {

    /** Submitted User Data **/
    $scope.submittedData = {};
    $scope.submittedData.kitName = ' ';
    $scope.submittedData.wifi_ssid =' ';
    $scope.submittedData.wifi_password =' ';
    $scope.submittedData.userEmail = ' ';
    $scope.submittedData.userName = ' ';

    /** Operational Data **/
    $scope.onboarding_session = ' ';
    $scope.device_token = ' ';
    $scope.pre_made = false;


    $scope.modalClass='hidden';

    $scope.handShakeState = false;


    /** Base Navigation  **/
    $scope.seque = function () {
        //if (($scope.payload.template == 'handshake') && ($scope.handShakeState == false)){
        //    $rootScope.$broadcast('handshake');
        //} else
        if ($scope.segueControl == 'ready') {
            //compare templates

            AnimationService.leaving(true);
            $timeout(function () {
                $location.path('/wizard/' + SegueService.nextPage($scope.payload.index, $scope.pre_made));
                $window.scrollTo(0, 0);
                console.log($scope.submittedData);
            }, 500); // see animations max duration time
        }
        else {
            handleError();
        }
    };

    $scope.back = function () {
        if ($scope.payload.backBlock != 'blocked') {
            //compare templates
            $rootScope.$broadcast('no');

            AnimationService.leaving(false);
            $timeout(function () {
                $scope.segueControl ='ready';
                $location.path('/wizard/' + SegueService.previousPage($scope.payload.index, $scope.pre_made));
                $window.scrollTo(0, 0);
            }, 500); // see animations max duration time
        }
    };


    /** Aux Navigation **/

    function handleError(){
        if (
            ($scope.payload.template == 'wifi_enter') ||
            ($scope.payload.template == 'sensorName') ||
            ($scope.payload.template == 'account1') ||
            ($scope.payload.template == 'login') ||
            ($scope.payload.template == 'make1') ||
            ($scope.payload.template == 'make2')
        ){
            $scope.segueControl = 'error';
            $timeout(function(){
                $scope.payload.segueButton = $scope.payload.segueButtonError;
            }, 250);
            return;
        }

        $scope.segueControl = 'error';
        $scope.errorButton = 'show';
        $rootScope.$broadcast('blockedSegue');
        $timeout(function(){
            $scope.payload.segueButton = $scope.payload.segueButtonError;
        }, 250); //half of animation time defined in _navigation.scss
    }

    $scope.$on('removeError', function(){
       removeError();
    });

    function removeError(){
        $scope.errorButton = '';
    }

    $scope.no = function(){
        $rootScope.$broadcast('no');
    };

    $scope.yes = function(){
        $scope.modalBox = 'red';
        var data = {title: "Uh oh", body:"It seems like you are missing parts of the kit. If that’s so, let’s notify the team and they’ll get back to you as soon as possible", image:"app/images/alert.svg", button:"Notify the team!"};
        $scope.modalContent = data;
        $rootScope.$broadcast('modal');
    };

    /** -- MODAL-- **/

    $scope.modalClick = function(){
        //alert('modalPress');
        $scope.modalClass='out';
        $timeout(function(){
            $scope.modalClass='hidden';
        }, 500);
    };
    $scope.modalButtonClick = function(){
        if ( $scope.modalBox == 'red' ) //error state
        {
            $window.open('mailto:someone@example.com?Subject=Hello%20again', '_blank');
        }
    };
    $scope.$on('modal', function(){
        $scope.modalClass='showing';
    });




});