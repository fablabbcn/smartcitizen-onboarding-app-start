'use strict';

angular.module('app').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}).controller('locationController', function($scope, uiGmapIsReady, $geolocation, scopePayload, AnimationService) {

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

    $scope.tagStates = Array.apply(null, Array($scope.locationTags.length)).map(String.prototype.valueOf,'');

    $scope.$parent.payload = scopePayload;
    // $scope.$parent.segueControl = 'ready';

    if(!$scope.$parent.submittedData.deviceData.user_tags) $scope.$parent.submittedData.deviceData.user_tags = []

    // Default loc in IAAC

    var loc = {
        zoom: 10,
        center: {
            latitude: 41.396867,
            longitude: 2.194351
        }
    };

    /********** Init Functions **********/

    AnimationService.animate(scopePayload.index);
    
    uiGmapIsReady.promise(1).then(function() { // Double check issue when browser back
        setMapData(loc.center, {}, loc.zoom) 
    });

    blockSegue();

    /********** Watchers **********/

    $scope.tagToggle = function(itr) {
        var index = $scope.locationTags.indexOf(itr);
        if ($scope.tagStates[index] == 'active') {
            $scope.tagStates[index] = '';
            $scope.$parent.submittedData.deviceData.user_tags.splice($scope.$parent.submittedData.deviceData.user_tags.indexOf(itr), 1);
        } else {
            $scope.$parent.submittedData.deviceData.user_tags.push($scope.locationTags[index]);
            $scope.tagStates[index] = 'active';
        }
    }

    $geolocation.watchPosition({
        timeout: 5,
        maximumAge: 25,
        enableHighAccuracy: true
    });

    $scope.$parent.pos = $geolocation.position;

    $scope.$parent.$watch('pos.coords', function(center) {
        if (typeof center == 'undefined') {
            console.log('Unable to capture users location');
            setMapData(loc.center, {}, loc.zoom);
        } else {
            setMapData(center, center, 18);
        }
    });

    $scope.autoCompleteListener = function() {
        if ((typeof $scope.autocomplete !== 'undefined') && (typeof $scope.autocomplete.geometry !== 'undefined')) {
            var marker = {
                latitude: $scope.autocomplete.geometry.location.lat(),
                longitude: $scope.autocomplete.geometry.location.lng()
            };
            setMapData(marker, marker, 17);
        }
    };

    /********** Functions **********/

    function setMapData(center, marker, zoom) {
        $scope.$parent.map = {
            center: {
                latitude: center.latitude,
                longitude: center.longitude
            },
            zoom: zoom,
            marker: {
                events: {
                    dragend: function(mapModel, eventName, marker, orignalEventArgs) {
                        console.log(marker.coords);
                        setMapData(marker.coords, marker.coords, $scope.$parent.map.zoom);
                    }
                },
                location: {
                    latitude: marker.latitude,
                    longitude: marker.longitude
                }
            }
        };
        setSensorPosition($scope.$parent.map.marker.location);
    }

    function setSensorPosition(position) {
        if (typeof position.latitude !== 'undefined') {
            $scope.$parent.submittedData.deviceData.latitude = position.latitude;
            $scope.$parent.submittedData.deviceData.longitude = position.longitude;
            prepSegue();
        } else {
            blockSegue();
        }
    }

    function prepSegue(){
        $scope.payload.segueButton = 'NEXT';
        $scope.$parent.segueControl ='ready';
    }

    function blockSegue(){
        $scope.$parent.segueControl ='blocked';
    }

});
//# TODO - when no location given use region from IP to center map