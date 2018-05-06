'use strict';
/**
 * Created by Lucian on 10/14/16.
 */
angular.module('app').controller('accesspointController', function ($scope, scopePayload, AnimationService, $rootScope, platform, $state, $interval, $timeout, $stateParams) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl = 'blocked';

    $scope.payload.promptedText = $scope.submittedData.deviceData.device_token;


    //here would be waiting for the packet push

    platform.listenToken($scope.submittedData.deviceData.device_token, $scope);
    $scope.$on('token', function (e, data) {
        console.log("Token received...");
        prepSegue();
    });

    function prepSegue() {
        $rootScope.$broadcast('forceSegue', { target: 'wizard.confirm_handshake', params: {lang: $stateParams.lang}});
    }
}).controller('accesspointController_base', function ($scope, $stateParams, scopePayload, AnimationService, $rootScope, $sce) {
    $rootScope.lang = $stateParams.lang;
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl = 'ready';
    $scope.$parent.smartCitizenToggle = '';
    if ($scope.$parent.payload.url == "accesspoint_1") {
        $scope.bindable = $sce.trustAsHtml($scope.$parent.payload.h3_1 + "<em class=blue>" + $scope.$parent.payload.em_1 + "</em>" + $scope.$parent.payload.h3_2 + "<em class=blue>" + $scope.$parent.payload.em_2 + "</em>" + $scope.$parent.payload.h3_3);
    } else if ($scope.$parent.payload.url == "accesspoint_2") {
        $scope.bindable = $sce.trustAsHtml($scope.$parent.payload.h3_1 + "<em class=blue>" + $scope.$parent.payload.em_1 + "</em>");
        console.log($scope.$parent.payload.h3_1 + "<em class=blue>" + $scope.$parent.payload.em_1 + "</em>");
    }
});