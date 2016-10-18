'use strict';

angular.module('app').controller('stateCtlr', function($scope, $rootScope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);

    function setUpSelection(){
        blockSegue();
        $scope.morphControl =['closed'];
        $scope.selectionButtons = ['','','',''];
        $scope.partButtons = [false,false,false,false];
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

    $scope.$on('blockedSegue', function(){
        for (var i = 0; i < 4; i++){
            if ($scope.selectionButtons[i] == '')
                $scope.selectionButtons[i] = 'error';
        }
        $scope.errorState = true;
        console.log('sett');
    });

});