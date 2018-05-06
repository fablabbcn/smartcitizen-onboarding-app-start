 'use strict';

angular.module('app').controller('stateCtlr', function($scope, $rootScope, scopePayload, AnimationService, $stateParams){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);

    $rootScope.lang = $stateParams.lang;

    function setUpSelection(){
        blockSegue();
        $scope.morphControl =['closed'];

        if ($scope.$parent.payload.template == 'selectparts2') {
            $scope.selectionButtons = ['','','',''];
            $scope.partButtons = [false,false,false,false];
        } else {
            $scope.selectionButtons = ['', '', '', ''];
            $scope.partButtons = [false,false,false,false];
        }

        $scope.infoImages = ['app/images/info1.png', 'app/images/info1.png', 'app/images/info1.png', 'app/images/info1.png', 'app/images/info1.png','app/images/info1.png','app/images/info1.png','app/images/info1.png' ];
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
        //console.log($scope.selectionButtons);
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
        $scope.payload.segueButton = $scope.payload.continueButton;
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
        if ( $scope.infoImages[val] == 'app/images/question.png' ){
            $scope.infoImages[val] = 'app/images/question2.png'
        }
    };
    $scope.infoImageOff = function(val){
        if ( $scope.infoImages[val] == 'app/images/info2.png' && !($scope.selectionButtons[val] == 'active') ){
            $scope.infoImages[val] = 'app/images/info1.png'
        }
        if ( $scope.infoImages[val] == 'app/images/question2.png' && !($scope.selectionButtons[val] == 'active') ){
            $scope.infoImages[val] = 'app/images/question.png'
        }
    };

    $scope.infoClick = function(val){
        $scope.$parent.modalBox = 'green';
        var data = [{
            "title": $scope.payload.part1,
            "body": $scope.payload.part1_desc,
            "image": "app/images/sensor_board.png"
        }, {
            "title": $scope.payload.part2,
            "body": $scope.payload.part2_desc,
            "image": "app/images/main_board.png"
        }, {
            "title": $scope.payload.part3,
            "body": $scope.payload.part3_desc,
            "image": "app/images/BOARDS-CUTOUT_0006_BATTERY2.png"
        }, {
            "title": $scope.payload.part4,
            "body": $scope.payload.part4_desc,
            "image": "app/images/BOARDS-CUTOUT_0005_USB.png"
        }, {
            "title": $scope.payload.part5,
            "body": $scope.payload.part5_desc,
            "image": "app/images/sck_case2.png"
        }, {
            "title": $scope.payload.part6,
            "body": $scope.payload.part6_desc,
            "image": "app/images/spacers.png"
        }, {
            "title": $scope.payload.part7,
            "body": $scope.payload.part7_desc,
            "image": "app/images/screen.png"
        }, {
            "title": $scope.payload.part8,
            "body": $scope.payload.part8_desc,
            "image": "app/images/plugs.png"
        }];
        data[val].button = $scope.payload.modalButton;
        $scope.$parent.modalContent = data[val];
        $scope.tempBlock = true;
        $rootScope.$broadcast('modal');
    };

});