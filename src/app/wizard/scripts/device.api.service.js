'usr strict';

angular.module('app').factory('device', function($rootScope, SegueService, Restangular) {

    function getSession() {
        return Restangular.all('onboarding/device').post({});
    }

    function setSession(session) {
        Restangular.setDefaultHeaders({
            OnboardingSession: session.onboarding_session
        });
    }

    function update(data) {
        if (data.user_tags) data.user_tags = data.user_tags.toString(); // Convert Array to String. Restangular fails?
        return Restangular.one('onboarding/device').patch(data);
    }

    return {
        setSession: setSession,
        getSession: getSession,
        update: update,
    };

});