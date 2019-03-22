export function accountController($scope, scopePayload, AnimationService, platform, $timeout, $rootScope, $stateParams, session) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);

    $scope.$parent.segueControl = 'ready';
    $scope.showPasswordToggle = 'password';
    $scope.forcePassword = false;

    $scope.given_email = ( $scope.$parent.submittedData.user.email == ' ' ? '' : $scope.$parent.submittedData.user.email);
    $scope.given_username = ( $scope.$parent.submittedData.user.username == ' ' ? '' : $scope.$parent.submittedData.user.username);

    $scope.$parent.submittedData.deviceData = {
        device_token: session.device_token
    };

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
        if ((typeof $scope.pass1 !== 'undefined') && ($scope.pass1.length > 0) && ($scope.pass1 == $scope.pass2)) {
            $scope.$parent.submittedData.user.password = $scope.pass1;
            platform.createUser($scope.$parent.submittedData.user).then(function (data) {
                loginAndBakeDevice();
            }, function (res) {
                blockSegue();
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
        $scope.$parent.submittedData.user.username = $scope.given_username;

        $scope.$parent.userName = $scope.input; // Is this need it?

        platform.getUser($scope.$parent.submittedData.user).then(function (data) {
            blockSegue();
        }, function (res) {
            prepSegue();
        });


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
        }
        else {
            $scope.forcePassword = false;
            $scope.showPasswordToggle = 'password';
        }
    };

    $scope.forgotPassword = function () {
        platform.resetPassword($scope.$parent.submittedData.user.email).then(function(data) {
            $scope.$parent.resetEmailSent();
        }, function(data){
            console.error('There was a problem sending the reset password email');
        });
    };

    /********** Functions **********/

    function loginAndBakeDevice() {
        platform.login($scope.$parent.submittedData.user).then(function (data) {
            platform.setAuth(data);
            console.log("Login successful!", data);
                platform.bakeDevice().then(function (data) {
                    console.log("Device succesfully created!", data);
                    // Prevent user to go back if the device is already created.
                    // TODO: That might be remove if the device creation is moved to the final step
                    $scope.payload.preventBack = true;
                    $scope.$parent.submittedData.deviceData.id = data.id;
                    prepSegue();
                }, function () {
                    console.log("Device creation failed!", data);
                    blockSegue();
                });
        }, function (data) {
            console.log("Login failed!", data);
            blockSegue();
        })
    }

    function checkEmailPresence(emailString) {
        platform.checkEmail(emailString).then(function (data) {
            $scope.$parent.submittedData.user.username = data.username;
            $scope.$parent.pre_made = true;
        }, function (data) {
            $scope.$parent.pre_made = false;
            $scope.$parent.submittedData.user.username = ' ';
        })
    }

    function prepSegue() {
        $scope.$parent.segueControl = 'ready';
    }

    function blockSegue() {
        $scope.$parent.segueControl = 'blocked';
    }

    function checkSegue() {
        // This needs a full cleanup
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

}

accountController.$inject = ['$scope', 'scopePayload', 'AnimationService', 'platform', '$timeout', '$rootScope', '$stateParams', 'session'];
