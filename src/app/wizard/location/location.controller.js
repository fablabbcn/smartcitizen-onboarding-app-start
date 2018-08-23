export function locationController($scope, uiGmapIsReady, $geolocation, scopePayload, AnimationService, tags) {

    // Tags must be on this list https://api.smartcitizen.me/v0/tags

    $scope.$parent.payload = scopePayload;
    $scope.$parent.submittedData.deviceData.user_tags_array = [];

    var proposedTags = $scope.$parent.submittedData.deviceData.proposed_user_tags_array;

    var tagsList = [];
    var tagsState = [];
    for(var i = 0; i < tags.length; i++) {
        var obj = tags[i];
        var name = obj.name;
        tagsList.push(name);
        if (proposedTags && proposedTags.includes(name)) {
            tagsState.push('active');
        } else {
            tagsState.push('');
        }
    }

    $scope.locationTags = tagsList.slice(0);
    $scope.tagStates = tagsState.slice(0);

    if ($scope.$parent.payload.url = "location_tags") {
        $scope.$parent.segueControl = 'ready';
    } else {
        $scope.$parent.segueControl = 'blocked';
        $scope.payload.segueButton = $scope.payload.waitButton;
    }

    // Default loc in IAAC
    var loc = {
        zoom: 2,
        center: {
            latitude: 41.396867,
            longitude: 2.194351
        }
    };

    AnimationService.animate(scopePayload.template);

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
        if ($scope.$parent && $scope.$parent.pos && oldValue) {
        }
        if (typeof newValue == 'undefined') {
            setMapData(loc.center, loc.center, loc.zoom);
        } else {
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
        $scope.$parent.map = {
            center: {
                latitude: center.latitude,
                longitude: center.longitude
            },
            zoom: zoom,
            marker: {
                events: {
                    dragend: function (mapModel, eventName, marker, orignalEventArgs) {
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

};

locationController.$inject = ['$scope', 'uiGmapIsReady', '$geolocation', 'scopePayload', 'AnimationService', 'tags'];
//# TODO - when no location given use region from IP to center map
