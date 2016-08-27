'use strict';

angular.module('app').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}).controller('locationController', function($scope, uiGmapGoogleMapApi, $geolocation, scopePayload){
    $scope.$parent.payload = scopePayload;


    function setMapData(center, val, zoom){
        $scope.$parent.map = {
            center: {latitude: center.latitude, longitude: center.longitude},
            zoom: zoom,
            markersEvents: {
                dragend: function (mapModel, eventName, marker, orignalEventArgs) {
                    console.log(marker.coords);
                    //console.log(originalEventArgs[0].latLng);
                }
            }
        };
        $scope.$parent.markerLocation = {};
        if (typeof center.latitude !== 'undefined'){
            $scope.$parent.markerLocation = {latitude: val.latitude, longitude: val.longitude};
        }
    }

    $geolocation.watchPosition({
        timeout: 5,
        maximumAge: 25,
        enableHighAccuracy: true
    });
    $scope.$parent.pos = $geolocation.position;

    $scope.$parent.$watch('pos.coords', function (newValue, oldValue) {
        var val = newValue;
        var center = val;
        var zoom = 18;
        if (typeof newValue == 'undefined') {
            console.log('did not capture local');
            center = {latitude: 41.396867,longitude: 2.194351};
            zoom = 14;
            val = {}
        } else {
            console.log('captured');
        }
        setMapData(center,val, zoom);
    });

    uiGmapGoogleMapApi.then(function(maps) {
        //console.log('maps loaded');
    });

    $scope.autoCompleteListener = function() {
        if( (typeof $scope.autocomplete !== 'undefined') && (typeof $scope.autocomplete.geometry !== 'undefined') ){
            //console.log('auto complete object present');
            //console.log($scope.autocomplete);
            var val = {latitude: $scope.autocomplete.geometry.location.lat(),longitude: $scope.autocomplete.geometry.location.lng()};
            setMapData(val, val, 17);
        }
    };
});