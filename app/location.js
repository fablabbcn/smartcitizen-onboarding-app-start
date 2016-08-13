'use strict';

angular.module('myApp').controller('locationController', function($scope, uiGmapGoogleMapApi, $geolocation){

    $geolocation.getCurrentPosition({
        timeout: 10000
    }).then(function(position) {
        if (typeof position.error !== 'undefined') {
            console.log(position.error); // ERROR HAPPENED
        } else {
            $scope.pos = position;
            //console.log($scope.$parent.index);
            //console.log($scope.pos);

            $scope.$parent.pos = $scope.pos;
            //console.log($scope.$parent.pos);
        }
    });
    uiGmapGoogleMapApi.then(function(maps) {
        console.log('maps loaded');
    });
});