'use strict';

angular.module('app').controller('finalController', function($scope, $rootScope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    
    // Maybe we use it for the final slide
 
});