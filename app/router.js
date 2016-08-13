'use strict';

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // route to show our basic form (/form)
        .state('wizard', {
            url: '/wizard',
            templateUrl: 'wizard/wizard.html',
            controller: 'wizardCtrl'
        })
        .state('wizard.landing', {
            url: '/landing',            //<< find way to remove these
            templateUrl: 'wizard/landing.html'
        })
        .state('wizard.collaborators', {
            url: '/collaborators',
            templateUrl: 'wizard/collaborators.html'
        })
        .state('wizard.currentdevice', {
            url: '/currentdevice',
            templateUrl: 'wizard/currentdevice.html'
        })
        .state('wizard.basic2', {
            url: '/basic2',
            templateUrl: 'wizard/basic2.html'
        })
        .state('wizard.basic', {
            url: '/basic',
            templateUrl: 'wizard/basic.html'
        })
        .state('wizard.selectparts', {
            url: '/selectparts',
            templateUrl: 'wizard/selectparts.html'
        })
        .state('wizard.kitbuild1', {
            url: '/kitbuild1',
            templateUrl: 'wizard/kitbuild1.html'
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild2',
            templateUrl: 'wizard/kitbuild2.html'
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild3',
            templateUrl: 'wizard/kitbuild3.html'
        })
        .state('wizard.pair1', {
            url: '/pair1',
            templateUrl: 'wizard/pair1.html'
        })
        .state('wizard.pair2', {
            url: '/pair2',
            templateUrl: 'wizard/pair2.html'
        }).state('wizard.sensorName', {
            url: '/sensorName',
            templateUrl: 'wizard/sensorName.html'
        })
        .state('wizard.location1', {
            url: '/location1',
            templateUrl: 'wizard/location1.html',
            controller: 'locationController'
        })
        .state('wizard.location2', {
            url: '/location2',
            templateUrl: 'wizard/location2.html'
        })
        .state('wizard.location3', {
            url: '/location3',
            templateUrl: 'wizard/location3.html'
    });

    $urlRouterProvider.otherwise('/wizard/landing');
});