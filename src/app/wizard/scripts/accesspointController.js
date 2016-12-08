'use strict';
/**
 * Created by Lucian on 10/14/16.
 */
angular.module('app').controller('accesspointController', function($scope, scopePayload, AnimationService, $rootScope, platform, $state, $interval, $timeout) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl = 'blocked';

    //here would be waiting for the packet push

    platform.listenToken($scope.submittedData.deviceData.device_token, $scope);

    $scope.$on('token', function(e, data) {
        console.log("Token received...");
        prepSegue();
    });

    function prepSegue() {
        $rootScope.$broadcast('forceSegue', { target: 'wizard.confirm_handshake'});
    }
});