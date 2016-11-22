'use strict';

angular.module('app').controller('smartCitizenController', function($scope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl ='ready';
    $scope.$parent.smartCitizenToggle = 'smartCitizen';
});