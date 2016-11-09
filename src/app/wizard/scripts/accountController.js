/**
 * Created by Lucian on 10/12/16.
 */
angular.module('app').controller('accountController', function($scope, scopePayload, $http, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl ='ready';

    $scope.showPasswordToggle = 'password';


    $scope.accountListener = function(){
        /** TODO - save username **/
        $scope.payload.segueButton = 'CONTINUE';
        if( validateEmail($scope.given_email) ) {
            checkEmailPresence('lucaslpena@gmail.com');
            prepSegue();
            $scope.$parent.userEmail =$scope.given_email;
        } else {
            blockSegue();
        }
    };

    $scope.passwordListener = function(){
        /** TODO - save username **/
        $scope.payload.segueButton = 'CONTINUE';
        if ( (typeof password_form.pass.value !== "undefined") &&  (password_form.pass.value.length > 0) ) {
            prepSegue();
            $scope.$parent.userEmail =$scope.given_email;
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

    $scope.showPassword = function(){
        if ($scope.showPasswordToggle == 'password') {
            $scope.showPasswordToggle = 'text';
        }
        else {
            $scope.showPasswordToggle = 'password';
        }
    };

    function checkEmailPresence(emailString) {
        var data = $.param({
            email: emailString
        });
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        $http.post("https://api.smartcitizen.me/v0/onboarding/user", data, config)
            .success(function (data, status, headers, config) {
                //$scope.PostDataResponse = data;
                console.log(data);
            })
            .error(function (data, status, headers, config) {
                console.log(data);
            });
    };
});