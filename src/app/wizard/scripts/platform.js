'use strict';

angular.module('app').factory('platform', function($rootScope, SegueService, Restangular) {

    var sessionHeaders = {}, socket;

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
        if (data.user_tags_array) data.user_tags = data.user_tags_array.toString(); // Convert Array to String. Restangular fails?
        return Restangular.one('onboarding/device').patch(data);
    }

    function bakeDevice(data) {
        console.log('calling bake');
        return Restangular.all('onboarding/register').post(data);
    }

    function checkEmail(identity) {
        var data = {
            email: identity
        };
        return Restangular.all('onboarding/user').post(data);
    }

    function login(loginData) {
        return Restangular.all('sessions').post(loginData);
    }

    function createUser(signupData) {
        return Restangular.all('users').post(signupData);
    }

    function connect(){
        socket = io.connect('wss://smartcitizen.xyz');
    }    

    function listenDevices(then){
        if (!socket) connect();
        socket.on('data-received', then);
    }

    function listenDevice(id, scope){
        listenDevices(function(data){
          if(id == data.device_id) scope.$emit('published', data);
        })
    }

    function listenTokens(then){
        if (!socket) connect();
        socket.on('token-received', then);
    }

    function listenToken(token, scope){
        listenTokens(function(data){
          if(token == data.device_token) scope.$emit('token', data);
        })
    }

    function resetPassword(emailString){
        var data = {
            email: emailString
        };
        return Restangular.all('password_resets').post(data);
    }

    return {
        setSession: setSession,
        setAuth: setAuth,
        getSession: getSession,
        updateDevice: updateDevice,
        bakeDevice: bakeDevice,
        checkEmail: checkEmail,
        login: login,
        createUser: createUser,
        listenDevice: listenDevice,
        listenToken: listenToken,
        resetPassword: resetPassword
    };

});