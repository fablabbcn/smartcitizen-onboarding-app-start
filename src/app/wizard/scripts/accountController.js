'use strict';
/**
 * Created by Lucian on 10/12/16.
 */
angular.module('app').controller('accountController', function($scope, scopePayload, AnimationService, platform){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl ='ready';

    $scope.showPasswordToggle = 'password';

    $scope.given_email = ( $scope.$parent.submittedData.userEmail == ' '? '' : $scope.$parent.submittedData.userEmail);

    $scope.given_username = ( $scope.$parent.submittedData.userName == ' '? '' : $scope.$parent.submittedData.userName);

    $scope.accountListener = function(){
        $scope.payload.segueButton = 'CONTINUE';
        if( validateEmail($scope.given_email) ) {
            $scope.$parent.submittedData.userEmail = $scope.given_email;
            checkEmailPresence($scope.given_email.toLowerCase());
            prepSegue();
            $scope.$parent.submittedData.userEmail = $scope.given_email;
        } else {
            blockSegue();
        }
    };

    $scope.passwordListener = function(){
        $scope.payload.segueButton = 'CONTINUE';
        if ( (typeof $scope.pass1 !== "undefined") && ($scope.pass1.length > 0) && ($scope.pass1 == $scope.pass2) ) {
            prepSegue();
            $scope.$parent.userEmail =$scope.given_email;
        } else {
            blockSegue();
        }
    };

    $scope.loginListener = function(){
        if( (typeof $scope.pass !== 'undefined') && ($scope.pass.length >= 5) ) {
            prepSegue();
            $scope.$parent.userPassword = $scope.input;
        } else {
            blockSegue();
        }
    };

    $scope.usernameListener = function(){
        /** TODO - update this **/
        if( (typeof $scope.given_username !== 'undefined') && ($scope.given_username.length >= 3) ) {
            $scope.$parent.submittedData.userName = $scope.given_username;
            prepSegue();
            $scope.$parent.userName = $scope.input;
        } else {
            blockSegue();
        }
    };

    $scope.generateName = function(){
        $scope.given_username = $scope.$parent.submittedData.userEmail.split("@")[0] + '_' + Math.floor(Math.random() * (99 - 1 + 1));
        $scope.$parent.submittedData.userName = $scope.given_username;
        prepSegue();
        $scope.$parent.userName = $scope.input;
    };

    function prepSegue(){
        $scope.$parent.segueControl ='ready';
    }
    function blockSegue(){
        $scope.$parent.segueControl = 'blocked';
    }
    function checkSegue(){
        if (
            ($scope.$parent.payload.url == 'email') && (validateEmail($scope.given_email)) ||
            ($scope.$parent.payload.url == 'username') && ($scope.given_username)
        ) {
            prepSegue();
        } else {
            blockSegue();
        }
    }

    checkSegue();

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
        var data = {
            email: emailString
        };
        console.log(data);
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        $http.post("https://api.smartcitizen.me/v0/onboarding/user", data, config)
            .success(function (data, status, headers, config) {
                //$scope.PostDataResponse = data;
                console.log({emailFuzz: 'success' });
                $scope.$parent.submittedData.userName = data.username;
                $scope.$parent.pre_made = true;
            })
            .error(function (data, status, headers, config) {
                console.log({emailFuzz: 'fail' });
                $scope.$parent.submittedData.userName = ' ';
            });
    }
});