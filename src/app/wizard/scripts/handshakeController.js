/**
 * Created by Lucian on 10/14/16.
 */
angular.module('app').controller('handshakeController', function($scope, scopePayload, AnimationService, $rootScope) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl = 'blocked';

    $scope.ssidListener = function(){
        if ( (typeof wifi_ssid.ssid.value !== "undefined") &&  wifi_ssid.ssid.value.length > 0)
        {
            $scope.$parent.segueControl = 'ready';
            $scope.payload.segueButton = 'CONTINUE';
            $rootScope.$broadcast('removeError');
            $scope.submittedData.wifi_ssid = wifi_ssid.ssid.value;
        } else {
            $scope.$parent.segueControl = 'blocked';
        }
    };
    $scope.passwordListener = function(){
        $scope.submittedData.wifi_password = wifi_ssid.pass.value;
    };

});