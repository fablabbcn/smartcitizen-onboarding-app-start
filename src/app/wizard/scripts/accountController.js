'use strict';
/**
 * Created by Lucian on 10/12/16.
 */
angular.module('app').controller('accountController', function ($scope, scopePayload, AnimationService, platform, $timeout, $rootScope, $stateParams) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);

    $scope.$parent.segueControl = 'ready';
    $scope.showPasswordToggle = 'password';
    $scope.forcePassword = false;

    $scope.given_email = ( $scope.$parent.submittedData.user.email == ' ' ? '' : $scope.$parent.submittedData.user.email);
    $scope.given_username = ( $scope.$parent.submittedData.user.username == ' ' ? '' : $scope.$parent.submittedData.user.username);

    /********** Watchers **********/

    $scope.accountListener = function () {
        $scope.payload.segueButton = $scope.payload.continueButton;
        if (validateEmail($scope.given_email)) {
            $scope.$parent.submittedData.user.email = $scope.given_email;
            checkEmailPresence($scope.given_email.toLowerCase());
            prepSegue();
        } else {
            blockSegue();
        }
    };

    $scope.passwordListener = function () {
        $scope.payload.segueButton = $scope.payload.continueButton;
        if ((typeof $scope.pass1 !== "undefined") && ($scope.pass1.length > 0) && ($scope.pass1 == $scope.pass2)) {
            $scope.$parent.submittedData.user.password = $scope.pass1;
            platform.createUser($scope.$parent.submittedData.user).then(function (data) {
                console.log('returned', data);
                loginAndBakeDevice();
            }, function (res) {
                if (res.data.errors.password) {
                    console.error("Password " + res.data.errors.password[0])
                }
                //blockSegue();
            });
        } else {
            blockSegue();
        }
    };

    $scope.loginListener = function () {
        blockSegue();
        if ((typeof $scope.pass !== 'undefined') && ($scope.pass.length >= 5)) {
            $scope.$parent.submittedData.user.password = $scope.pass;
            loginAndBakeDevice();
        }
        else {
            blockSegue();
        }
    };

    $scope.usernameListener = function () {
        if ((typeof $scope.given_username !== 'undefined') && ($scope.given_username.length >= 3)) {
            $scope.$parent.submittedData.user.username = $scope.given_username;

            $scope.$parent.userName = $scope.input; // Is this need it?

            platform.createUser($scope.$parent.submittedData.user).then(function (data) {
                //Do nothing
            }, function (res) {
                if (res.data.errors.username) {
                    // Username has already been taken
                    console.error("Username " + res.data.errors.username[0]);
                    blockSegue();
                } else {
                    prepSegue();
                }
            });
        } else {
            blockSegue();
        }
    };

    $scope.generateName = function () {

        $scope.given_username = $scope.$parent.submittedData.user.email.split("@")[0] + '_' + Math.floor(Math.random() * (99 - 1 + 1));
        $scope.$parent.submittedData.user.username = $scope.given_username;
        prepSegue();
        $scope.$parent.userName = $scope.input;
    };

    $scope.showPassword = function (tgl) {
        if ($scope.forcePassword == true) {
            return;
        }
        if (tgl == true) {
            $scope.showPasswordToggle = 'text';
        }
        else {
            $scope.showPasswordToggle = 'password';
        }
    };

    $scope.forceShowPassword = function () {
        if ($scope.forcePassword == false) {
            $scope.forcePassword = true;
            $scope.showPasswordToggle = 'text';
            console.log('showing');
        }
        else {
            $scope.forcePassword = false;
            $scope.showPasswordToggle = 'password';
            console.log('hide');
        }
    };

    $scope.forgotPassword = function () {
        window.open("", '_blank');
    };

    /********** Functions **********/

    function loginAndBakeDevice() {
        platform.login($scope.$parent.submittedData.user).then(function (data) {
            platform.setAuth(data);
            console.log("logged in successful");
            $timeout(function () {
                platform.bakeDevice().then(function (data) {
                    console.log("baked successful", data);
                    $timeout(function () {
                        $scope.$parent.submittedData.deviceData.id = data.id;
                        //prepSegue();
                        $rootScope.$broadcast('forceSegue', {
                            target: 'wizard.final',
                            params: {lang: $stateParams.lang}
                        });
                    }, 250); // This is temp
                }, function () {
                    console.log("baked failed", data);
                    blockSegue();
                });
            }, 250); // This is temp
        }, function (data) {
            console.log(data);
            //blockSegue();
        })
    }

    function checkEmailPresence(emailString) {
        platform.checkEmail(emailString).then(function (data) {
            console.log(data);
            $scope.$parent.submittedData.user.username = data.username;
            $scope.$parent.pre_made = true;
        }, function (data) {
            console.log(data);
            $scope.$parent.pre_made = false;
            $scope.$parent.submittedData.user.username = ' ';
        })
    }

    function prepSegue() {
        // debugger;
        $scope.$parent.segueControl = 'ready';
    }

    function blockSegue() {
        // debugger;
        $scope.$parent.segueControl = 'blocked';
    }

    function checkSegue() {
        // debugger;
        if (
            ($scope.$parent.payload.url == 'email') && (validateEmail($scope.given_email)) ||
            ($scope.$parent.payload.url == 'username') && ($scope.given_username)
        ) {
            prepSegue();
        } else {
            blockSegue();
        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    checkSegue();


});