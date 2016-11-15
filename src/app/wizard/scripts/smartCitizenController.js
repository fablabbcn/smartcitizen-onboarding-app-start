angular.module('app').controller('smartCitizenController', function($scope, scopePayload, $http, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl ='ready';
    $scope.$parent.smartCitizenToggle = 'smartCitizen';


    function createSession() {
        var data = $.param({
        });
        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        $http.post("https://api.smartcitizen.me/v0/onboarding/device", data, config)
            .success(function (data, status, headers, config) {
                $scope.onboarding_session = data.onboarding_session;
                $scope.device_token = data.device_token;
                console.log({session: 'successful' });

            })
            .error(function (data, status, headers, config) {
                console.log({session: 'failed' });
                console.log(data);
            });
    }

    if ($scope.onboarding_session == ' '){
        createSession();
    }
});