'use strict';

angular.module('app').controller('stateCtlr', function($scope, $rootScope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);

    function setUpSelection(){
        blockSegue();
        $scope.morphControl =['closed'];

        if ($scope.$parent.payload.template == 'selectparts2') {
            $scope.selectionButtons = [''];
            $scope.partButtons = [false];
        } else {
            $scope.selectionButtons = ['', '', '', ''];
            $scope.partButtons = [false,false,false,false];
        }

        $scope.infoImages = ['app/images/info1.png', 'app/images/info1.png', 'app/images/info1.png', 'app/images/info1.png' ];
    }
    function prepSegue(){
        $scope.$parent.segueControl ='ready';
    }
    function blockSegue(){
        $scope.$parent.segueControl ='blocked';
    }

    $scope.selectDevice = function(val){
        setUpSelection();
        $scope.selectionButtons[val] = 'active';
        prepSegue();
    };
    $scope.selectLocation = function(val){
        setUpSelection();
        $scope.selectionButtons[val] = 'active';
        prepSegue();
    };


    $scope.selectPart = function(val){
        console.log($scope.selectionButtons);
        if ($scope.tempBlock == true){
            $scope.tempBlock = false;
            return;
        }
        resetter();
        if ($scope.partButtons[val] == true) {
            $scope.partButtons[val] = false;
            $scope.selectionButtons[val] = '';
        } else {
            $scope.partButtons[val] = true;
            $scope.selectionButtons[val] = 'active';
        }
        if ( $scope.partButtons.every( function check(val){
                return val === true; })) {
            prepSegue();
        } else {
            blockSegue();
        }
    };

    function resetter(){
        $scope.payload.segueButton = 'CONTINUE';
        if ($scope.errorState == true){
            $rootScope.$broadcast('removeError');
        }
    }


    $scope.morph = function(val){
        setUpSelection();
        $scope.morphControl[val] = 'open';
    };

    $scope.segueCondition = function(){
        setUpSelection();
        prepSegue();
    };

    setUpSelection();

    /** -- DELEGATE METHODS -- **/
    $scope.$on('blockedSegue', function(){
        for (var i = 0; i < 4; i++){
            if ($scope.selectionButtons[i] == '')
                $scope.selectionButtons[i] = 'error';
        }
        $scope.errorState = true;
    });

    $scope.$on('no', function(){
        resetter();
        blockSegue();
    });


    /** -- INFO METHODS -- **/
    $scope.infoImageOn = function(val){
        if ( $scope.infoImages[val] == 'app/images/info1.png' ){
            $scope.infoImages[val] = 'app/images/info2.png'
        }
    };
    $scope.infoImageOff = function(val){
        if ( $scope.infoImages[val] == 'app/images/info2.png' && !($scope.selectionButtons[val] == 'active') ){
            $scope.infoImages[val] = 'app/images/info1.png'
        }
    };

    $scope.infoClick = function(val){
        $scope.$parent.modalBox = 'green';
        var data = [{
            "title": "Sensor Board",
            "body": "This is where all the sensors are. It connects to the bigger, hardware board, so that the sensors can transmit what they find.",
            "image": "app/images/BOARDS-CUTOUT_0003_SENSOR-BOARD-BLUE.png"
        }, {
            "title": "Hardware Board",
            "body": "This is where all the computation takes place. Anytime you want to connect something to the Smart Citizen, it will be on this board",
            "image": "app/images/BOARDS-CUTOUT_0002_HARDWARE-BOARD-WHITE.png"
        }, {
            "title": "Polymer Battery",
            "body": "This powers the device. Every so often it has to be recharged, especially after long periods of continuous use.",
            "image": "app/images/BOARDS-CUTOUT_0006_BATTERY2.png"
        }, {
            "title": "Charging Cable",
            "body": "When the kit needs to be charged, you can connect this cable to your computer or plug, and back to the kit.",
            "image": "app/images/BOARDS-CUTOUT_0005_USB.png"
        }, {
            "title": "Made for bespoke cases",
            "body": "When the kit needs to be charged, you can connect this cable to your computer or plug, and back to the kit.",
            "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosure-wShine.png"
        }];
        data[val].button = 'OK, got it';
        $scope.$parent.modalContent = data[val];
        $scope.tempBlock = true;
        $rootScope.$broadcast('modal');
    };


});