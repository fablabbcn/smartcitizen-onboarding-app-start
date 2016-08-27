'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider,$locationProvider) {


    $stateProvider

    // route to show our basic form (/form)
        .state('wizard', {
            url: '/wizard',
            templateUrl: 'app/wizard/wizard.html',
            controller: 'wizardCtrl'
        })
        .state('wizard.landing', {
            url: '/landing',            //<< find way to remove these
            templateUrl: 'app/wizard/landing.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function(SegueService){ return SegueService.prep(0); }
            }
        })
        .state('wizard.currentdevice', {
            url: '/device',
            templateUrl: 'app/wizard/currentdevice.html',
            controller: 'stateCtlr',
            resolve: {
                scopePayload: function(SegueService){ return SegueService.prep(1); }
            }
        })
        .state('wizard.collaborators1', {
            url: '/us',
            templateUrl: 'app/wizard/collaborators.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(2); }}
        })
        .state('wizard.collaborators2', {
            url: '/smart_citizen',
            templateUrl: 'app/wizard/collaborators.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(3); }}
        })
        .state('wizard.basic2', {
            url: '/smart_citizen_brief',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(4); }}
        })
        .state('wizard.basic', {
            url: '/whats_in_the_box',
            templateUrl: 'app/wizard/basic.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(5); }}
        })
        .state('wizard.selectparts', {
            url: '/kit_parts',
            templateUrl: 'app/wizard/selectparts.html',
            controller: 'stateCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(6); }}
        })
        .state('wizard.kitbuild1', { // TODO - fix this output
            url: '/kitbuild_1',
            templateUrl: 'app/wizard/kitbuild1.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(7); }}
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild_2',
            templateUrl: 'app/wizard/kitbuild2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(8); }}
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild_3',
            templateUrl: 'app/wizard/kitbuild3.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(9); }}
        })
        .state('wizard.wifiprep', {
            url: '/wifi_prep',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(10); }}
        })
        .state('wizard.pair1', {
            url: '/pair_1',
            templateUrl: 'app/wizard/pair1.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(11); }}
        })
        .state('wizard.pair2', {
            url: '/pair_2',
            templateUrl: 'app/wizard/pair2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(12); }}
        })
        .state('wizard.wifisuccess', {
            url: '/wifi_success',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(13); }}
        })
        .state('wizard.sensorName', {
            url: '/sensorName',
            templateUrl: 'app/wizard/sensorName.html',
            controller: 'nameCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(14); }}
        })
        .state('wizard.location1', {
            url: '/location1',
            templateUrl: 'app/wizard/location1.html',
            controller: 'locationController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(15); }}
        })
        .state('wizard.location2', {
            url: '/location2',
            templateUrl: 'app/wizard/location2.html',
            controller: 'stateCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(16); }}
        })
        .state('wizard.location3', {
            url: '/location3',
            templateUrl: 'app/wizard/location3.html',
            controller: 'locationController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(17); }}
        });

    /* Default state */
    $urlRouterProvider.otherwise('/wizard/landing');

    $locationProvider.html5Mode({ // <<breaks
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
});