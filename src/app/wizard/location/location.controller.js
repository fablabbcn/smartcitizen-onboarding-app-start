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

    AnimationService.animate(scopePayload.template);

    $geolocation.watchPosition({
        timeout: 50,
        maximumAge: 25,
        enableHighAccuracy: true
    });

    $scope.$parent.pos = $geolocation.position;

    $scope.$parent.$watch('pos.coords', function (newValue, oldValue) {
        if (typeof oldValue == 'undefined' && typeof newValue !== 'undefined') {
            var center = newValue;
            setMapData(center, center, 17);
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

    $scope.autoCompleteListener = function (autocomplete) {
      console.log('auto',autocomplete);
        if ((typeof autocomplete !== 'undefined') && (typeof autocomplete.geometry !== 'undefined')) {
            var marker = {
                latitude: autocomplete.geometry.location.lat(),
                longitude: autocomplete.geometry.location.lng()
            };
            setMapData(marker, marker, 17);
        }
    };

    function setMapData(center, marker, zoom) {
        // TODO: Check the function below
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
            $scope.$parent.submittedData.deviceData.latitude = position.latitude;
            $scope.$parent.submittedData.deviceData.longitude = position.longitude;
            console.log('Set map position', position);
            prepSegue();
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
