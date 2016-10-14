/**
 * Created by Lucian on 10/12/16.
 */
angular.module('app').controller('accountController', function($scope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl ='ready';


    $scope.accountListener = function(){
        /** TODO - save username **/
        if( validateEmail($scope.input) ) {
            prepSegue();
            $scope.$parent.userEmail =$scope.input;
        } else {
            blockSegue();
        }
    };

    $scope.loginListener = function(){
        /** TODO - update this **/
        if( (typeof $scope.input !== 'undefined') && ($scope.input.length >= 5) ) {
            prepSegue();
            $scope.$parent.userPassword = $scope.input;
        } else {
            blockSegue();
        }
    };

    $scope.usernameListener = function(){
        /** TODO - update this **/
        if( (typeof $scope.input !== 'undefined') && ($scope.input.length >= 3) ) {
            prepSegue();
            $scope.$parent.userName = $scope.input;
        } else {
            blockSegue();
        }
    };

    function prepSegue(){
        $scope.$parent.segueControl ='ready';
    }
    function blockSegue(){
        $scope.$parent.segueControl ='blocked';
    }

    blockSegue();

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});