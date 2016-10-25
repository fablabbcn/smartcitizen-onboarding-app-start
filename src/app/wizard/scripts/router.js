'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider,$locationProvider) {


    $stateProvider

    /** -- INTRO -- **/
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
        .state('wizard.making_sense', {
            url: '/making_sense',
            templateUrl: 'app/wizard/collaborators.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(1); }}
        })
        .state('wizard.smart_citizen', {
            url: '/smart_citizen',
            templateUrl: 'app/wizard/collaborators.html',
            controller: 'smartCitizenController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(2); }}
        })
        .state('wizard.smart_citizen2', {
            url: '/smart_citizen_brief',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'smartCitizenController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(3); }}
        })
        .state('wizard.basic2', {
            url: '/smart_citizen_brief2',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'smartCitizenController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(4); }}
        })


        /** -- WHATS IN THE BOX -- **/
        .state('wizard.basic', {
            url: '/whats_in_the_box',
            templateUrl: 'app/wizard/basic.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(10); }}
        })
        .state('wizard.selectparts', {
            url: '/kit_parts',
            templateUrl: 'app/wizard/selectparts.html',
            controller: 'stateCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(11); }}
        })
        .state('wizard.confirm_parts', {
            url: '/confirm_parts',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(12); }}
        })
        .state('wizard.kitbuild1', { // TODO - fix this output
            url: '/kitbuild_1',
            templateUrl: 'app/wizard/kitbuild1.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(13); }}
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild_2',
            templateUrl: 'app/wizard/kitbuild2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(14); }}
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild_3',
            templateUrl: 'app/wizard/kitbuild3.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(15); }}
        })
        .state('wizard.confirm_build', {
            url: '/confirm_build',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(16); }}
        })


    /** -- WIFI HANDSHAKE-- **/
        .state('wizard.pair1', {
            url: '/pair_1',
            templateUrl: 'app/wizard/pair1.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(30); }}
        })
        .state('wizard.pair2', {
            url: '/pair_2',
            templateUrl: 'app/wizard/pair2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(31); }}
        })
        .state('wizard.wifisuccess', {
            url: '/wifi_success',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(32); }}
        })


    /** -- NAME -- **/
        .state('wizard.sensorName', {
            url: '/sensorName',
            templateUrl: 'app/wizard/sensorName.html',
            controller: 'nameCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(40); }}
        })


    /** -- LOCATION -- **/
        .state('wizard.location1', {
            url: '/location1',
            templateUrl: 'app/wizard/location1.html',
            controller: 'locationController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(50); }}
        })
        .state('wizard.location2', {
            url: '/location2',
            templateUrl: 'app/wizard/location2.html',
            controller: 'stateCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(51); }}
        })
        .state('wizard.location3', {
            url: '/location3',
            templateUrl: 'app/wizard/location3.html',
            controller: 'locationController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(52); }}
        })


        /** -- HANDSHAKE -- **/
        .state('wizard.wifi_enter', {
            url: '/wifi_enter',
            templateUrl: 'app/wizard/wifi_enter.html',
            controller: 'handshakeController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(20); }}
        })
        .state('wizard.handshake', {
            url: '/handshake',
            templateUrl: 'app/wizard/handshake.html',
            controller: 'handshakeController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(21); }}
        })



        /** --  ACCOUNT -- **/
        .state('wizard.account1', {
            url: '/email',
            templateUrl: 'app/wizard/account1.html',
            controller: 'accountController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(90); }}
        })
        .state('wizard.login', {
            url: '/login',
            templateUrl: 'app/wizard/login.html',
            controller: 'accountController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(91); }}
        })
        .state('wizard.account2', {
            url: '/username',
            templateUrl: 'app/wizard/make_account1.html',
            controller: 'accountController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(95); }}
        })
        .state('wizard.account3', {
            url: '/password',
            templateUrl: 'app/wizard/make_account2.html',
            controller: 'accountController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(96); }}
        });

    /* Default state */
    $urlRouterProvider.otherwise('/wizard/landing');

    $locationProvider.html5Mode({ // <<breaks
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
});