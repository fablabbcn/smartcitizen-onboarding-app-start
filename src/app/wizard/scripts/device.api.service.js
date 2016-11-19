'usr strict';

angular.module('app').factory('device', function($rootScope, SegueService, $http){

    var url = "https://api.smartcitizen.me/v0/onboarding/device"

    var config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    function getSession() {
        var data = $.param({
        });
        return $http.post(url , data, config);
    }

    return {
      getSession: getSession
    };

});