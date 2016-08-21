'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'ngGeolocation',
    'uiGmapgoogle-maps',
    'google.places'])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
    })
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function () {
            alert('awesome!');
        };
    });