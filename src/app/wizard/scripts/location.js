'use strict';

angular.module('app').config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
}).controller('locationController', function ($scope, uiGmapIsReady, $geolocation, scopePayload, AnimationService) {

    // Tags must be on this list https://api.smartcitizen.me/v0/tags

    console.log($scope.$parent.submittedData.deviceData.user_tags_array);

    $scope.$parent.payload = scopePayload;

    $scope.locationTags = [
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

    $scope.tagStates = Array.apply(null, Array($scope.locationTags.length)).map(String.prototype.valueOf, '');

    if ($scope.$parent.payload.url = "location_tags") {
        $scope.locationTags = scopePayload.tags;
        $scope.$parent.segueControl = 'ready';
    } else {
        $scope.$parent.segueControl = 'blocked';
        $scope.payload.segueButton = $scope.payload.waitButton;
    }

    // Default loc in IAAC
    var loc = {
        zoom: 12,
        center: {
            latitude: 41.396867,
            longitude: 2.194351
        }
    };

    AnimationService.animate(scopePayload.index);

    // uiGmapIsReady.promise(1).then(function () { // Double check issue when browser back
        //setInitialPosition();
    // });


    $geolocation.watchPosition({
        timeout: 50,
        maximumAge: 25,
        enableHighAccuracy: true
    });
    $scope.$parent.pos = $geolocation.position;

    $scope.$parent.$watch('pos.coords', function (newValue, oldValue) {
        //console.log("newValue:", newValue, "oldValue:", oldValue);
        if ($scope.$parent && $scope.$parent.pos && oldValue) {
            //console.log('preSAVED')
        }
        if (typeof newValue == 'undefined') {
            setMapData(loc.center, loc.center, loc.zoom);
        } else {
            //console.log('captured');
            var val = newValue;
            var center = val;
            var zoom = 18;
            setMapData(center, val, zoom);
        }
    });

    $scope.tagToggle = function (itr) {
        var index = $scope.locationTags.indexOf(itr);
        if ($scope.tagStates[index] == 'active') {
            $scope.tagStates[index] = '';
            $scope.$parent.submittedData.deviceData.user_tags_array.splice($scope.$parent.submittedData.deviceData.user_tags_array.indexOf(itr), 1);
        } else {
            $scope.$parent.submittedData.deviceData.user_tags_array.push($scope.locationTags[index]);
            $scope.tagStates[index] = 'active';
        }
    };

    $scope.autoCompleteListener = function () {
        if ((typeof $scope.autocomplete !== 'undefined') && (typeof $scope.autocomplete.geometry !== 'undefined')) {
            var marker = {
                latitude: $scope.autocomplete.geometry.location.lat(),
                longitude: $scope.autocomplete.geometry.location.lng()
            };
            setMapData(marker, marker, 17);
        }
    };

    function setMapData(center, marker, zoom) {
        if (!$scope.$parent) return;
        //console.log('THIS IS IN MAP DATA:', center, zoom);
        $scope.$parent.map = {
            center: {
                latitude: center.latitude,
                longitude: center.longitude
            },
            zoom: zoom,
            marker: {
                events: {
                    dragend: function (mapModel, eventName, marker, orignalEventArgs) {
                        //console.log(marker.coords);
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
            prepSegue();
            $scope.$parent.submittedData.deviceData.latitude = position.latitude;
            $scope.$parent.submittedData.deviceData.longitude = position.longitude;
        }
    }

    function prepSegue() {
        $scope.payload.segueButton = $scope.payload.continueButton;
        $scope.$parent.segueControl = 'ready';
    }

    function blockSegue() {
        $scope.$parent.segueControl = 'blocked';
    }

});
//# TODO - when no location given use region from IP to center map