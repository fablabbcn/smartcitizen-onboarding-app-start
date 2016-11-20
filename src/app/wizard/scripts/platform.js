'use strict';

angular.module('app').factory('platform', function($rootScope, SegueService, Restangular) {

    var sessionHeaders = {};

    function setSession(session) {
        sessionHeaders.OnboardingSession = session.onboarding_session;
        Restangular.setDefaultHeaders(sessionHeaders);
    }

    function setAuth(auth) {
        sessionHeaders.Authorization = 'Bearer '  + auth.access_token;
        Restangular.setDefaultHeaders(sessionHeaders);
    }

    function getSession() {
        return Restangular.all('onboarding/device').post({});
    }

    function updateDevice(data) {
        if (data.user_tags) data.user_tags = data.user_tags.toString(); // Convert Array to String. Restangular fails?
        return Restangular.one('onboarding/device').patch(data);
    }

    function bakeDevice(data) {
        return Restangular.all('onboarding/register').post({});
    }

    function checkEmail(emailString) {
        var data = {
            email: emailString
        };
        return Restangular.all('onboarding/user').post(data);
    }

    function login(loginData) {
        return Restangular.all('sessions').post(loginData);
    }

    function createUser(signupData) {
        return Restangular.all('users').post(signupData);
    }

    return {
        setSession: setSession,
        setAuth: setAuth,
        getSession: getSession,
        updateDevice: updateDevice,
        bakeDevice: bakeDevice,
        checkEmail: checkEmail,
        login: login,
        createUser: createUser
    };

});