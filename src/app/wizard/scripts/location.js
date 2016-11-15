'use strict';

angular.module('app').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}).controller('locationController', function($scope, uiGmapGoogleMapApi, $geolocation, scopePayload, AnimationService){

    $scope.locationTags = [
        'inside',
        'outside',
        'park',
        'beach',
        'school',
        'street',
        'woods',
        'residential',
        'commercial',
        'plaza',
        'rural',
        'busy',
        'calm',
        'terrace',
        'balcony',
        'window',
        'garden',
        'bicycle'
    ];

    $scope.tagStates = ['','','','','','','','','','','','','','','','','',''];


    $scope.$parent.payload = scopePayload;
    $scope.$parent.segueControl ='ready';
    AnimationService.animate(scopePayload.index);

    $scope.tagToggle = function(itr){
        var index = $scope.locationTags.indexOf(itr);
        console.log(index);
        if ($scope.tagStates[index] == 'active')
        {
            $scope.tagStates[index] = '';
        } else {
            $scope.tagStates[index] = 'active';
        }
    };


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

            //SET Center to IAAC in BCN with zoom
            center = {latitude: 41.396867,longitude: 2.194351};
            zoom = 13;
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

//# TODO - when no location given use region from IP to center map