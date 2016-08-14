'use strict';

angular.module('myApp').controller('stateCtlr', function($scope){

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

    $scope.selectPart = function(val){
        if ($scope.partButtons[val] == true) {
            $scope.partButtons[val] = false;
            $scope.selectionButtons[val] = '';
        } else {
            $scope.partButtons[val] = true;
            $scope.selectionButtons[val] = 'active';
        }
        if ( $scope.partButtons.every( b => b === true) ) {
            prepSegue();
        } else {
            blockSegue();
        }
    };;



    $scope.morph = function(val){
        setUpSelection();
        $scope.morphControl[val] = 'open';
    };

    $scope.segueCondition = function(){
        setUpSelection();
        prepSegue();
    };

    setUpSelection();

});