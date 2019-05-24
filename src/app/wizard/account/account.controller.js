export function accountController($scope, scopePayload, AnimationService, platform, $timeout, $rootScope, $stateParams, session) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);

    $scope.$parent.segueControl = 'ready';
    $scope.showPasswordToggle = 'password';
    $scope.forcePassword = false;

    $scope.given_email = ( $scope.$parent.submittedData.user.email == ' ' ? '' : $scope.$parent.submittedData.user.email);
    $scope.given_username = ( $scope.$parent.submittedData.user.username == ' ' ? '' : $scope.$parent.submittedData.user.username);

    /********** Watchers **********/

    $scope.accountListener = function () {
        $scope.payload.segueButton = $scope.payload.continueButton;
        if (validateEmail($scope.given_email)) {
            $scope.$parent.submittedData.user.email = $scope.given_email.toLowerCase();
            prepSegue();
        } else {
            blockSegue();
        }
    };

    $scope.passwordListener = function () {
        $scope.payload.segueButton = $scope.payload.continueButton;
        if ((typeof $scope.pass1 !== 'undefined') && ($scope.pass1.length >= 8) && ($scope.pass1 == $scope.pass2)) {
            $scope.$parent.submittedData.user.password = $scope.pass1;
            prepSegue();
        } else {
            blockSegue();
        }
    };

    $scope.loginListener = function () {
        if ((typeof $scope.pass !== 'undefined') && ($scope.pass.length >= 5)) {
            $scope.$parent.submittedData.user.password = $scope.pass;
            prepSegue();
        }
        else {
            blockSegue();
        }
    };

    $scope.usernameListener = function () {
        if(typeof $scope.given_username !== 'undefined'){
            console.log($scope.given_username.length);
            $scope.given_username = $scope.given_username.split(' ').join('_');
            if($scope.given_username.length > 3 && $scope.given_username.length  < 30){
                $scope.$parent.submittedData.user.username = $scope.given_username;
                prepSegue();
            } else {
                blockSegue();
            }
        } else {
            blockSegue();
        }
    };

    $scope.generateName = function () {
        $scope.given_username = $scope.$parent.submittedData.user.email.split("@")[0] + '_' + Math.floor(Math.random() * (99 - 1 + 1));
        $scope.$parent.submittedData.user.username = $scope.given_username;
        prepSegue();
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

    function prepSegue() {
        $scope.$parent.segueControl = 'ready';
    }

    function blockSegue() {
        $scope.$parent.segueControl = 'blocked';
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}

accountController.$inject = ['$scope', 'scopePayload', 'AnimationService', 'platform', '$timeout', '$rootScope', '$stateParams', 'session'];
