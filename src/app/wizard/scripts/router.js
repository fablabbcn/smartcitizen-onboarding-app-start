'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {

    var refreshed = true;

    $stateProvider

    /** -- INTRO -- **/
        .state('wizard', {
            url: '/wizard',
            templateUrl: 'app/wizard/wizard.html',
            controller: 'wizardCtrl',
            resolve: {
                session: function(platform, $state){ 
                    return platform.getSession().then(function(session){
                        platform.setSession(session);
                        console.log(session);
                        // This ensure user will be always redirected temporary to avoid state issues.
                        // Disable for development.
                        if(!refreshed) {
                            refreshed = true;
                            $state.go('wizard.landing'); 
                        }
                        return session;
                    }, function(){
                        $state.go('unavailable');
                    });
                }
            }
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
        .state('wizard.selectparts2', {
            url: '/case',
            templateUrl: 'app/wizard/selectparts2.html',
            controller: 'stateCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(12); }}
        })
        .state('wizard.confirm_parts', {
            url: '/confirm_parts',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(13); }}
        })
        .state('wizard.kitbuild1', { // TODO - fix this output
            url: '/kitbuild_1',
            templateUrl: 'app/wizard/kitbuild1.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(14); }}
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild_2',
            templateUrl: 'app/wizard/kitbuild2.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(15); }}
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild_3',
            templateUrl: 'app/wizard/kitbuild3.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(16); }}
        })
        .state('wizard.kitbuild4', {
            url: '/kitbuild_4',
            templateUrl: 'app/wizard/kitbuild4.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(17); }}
        })
        .state('wizard.case1', {
            url: '/case_1',
            templateUrl: 'app/wizard/casing.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(18); }}
        })
        .state('wizard.case2', {
            url: '/case_2',
            templateUrl: 'app/wizard/casing.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(19); }}
        })

        .state('wizard.confirm_build', {
            url: '/confirm_build',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(20); }}
        })


    /** -- WIFI HANDSHAKE-- **/
        .state('wizard.accesspoint_pre', {
            url: '/accesspoint_pre',
            templateUrl: 'app/wizard/basic.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(30); }}
        })
        .state('wizard.accesspoint_1', {
            url: '/accesspoint_1',
            templateUrl: 'app/wizard/prompted_entry.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(31); }}
        })
        .state('wizard.accesspoint_2', {
            url: '/accesspoint_2',
            templateUrl: 'app/wizard/prompted_entry.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(32); }}
        }).state('wizard.accesspoint_3', {
        url: '/accesspoint_3',
        templateUrl: 'app/wizard/prompted_entry.html',
        controller: 'accesspointController',
        resolve: { scopePayload: function(SegueService){ return SegueService.prep(33); }}
    })


    /** -- NAME -- **/
        .state('wizard.sensorName_prep', {
            url: '/sensorName_prep',
            templateUrl: 'app/wizard/basic.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(40); }}
        })
        .state('wizard.sensorName', {
            url: '/sensorName',
            templateUrl: 'app/wizard/sensorName.html',
            controller: 'nameCtlr',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(41); }}
        })


    /** -- LOCATION -- **/
        .state('wizard.location_prep', {
            url: '/location_prep',
            templateUrl: 'app/wizard/location_prep.html',
            controller: 'locationController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(50); }}
        })
        .state('wizard.location_map', {
            url: '/location_map',
            templateUrl: 'app/wizard/location_map.html',
            controller: 'locationController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(51); }}
        })
        /*        
        .state('wizard.location_tags', {
            url: '/location_tags',
            templateUrl: 'app/wizard/location_tags.html',
            controller: 'locationController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(52); }}
        })
        */
        .state('wizard.confirm_location', {
            url: '/confirm_location',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(52); }}
        })



        /** -- HANDSHAKE -- **/
        .state('wizard.wifi_enter', {
            url: '/wifi_enter',
            templateUrl: 'app/wizard/wifi_enter.html',
            controller: 'handshakeController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(21); }}
        })
        .state('wizard.handshake', {
            url: '/handshake',
            templateUrl: 'app/wizard/handshake.html',
            controller: 'handshakeController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(22); }}
        })
        .state('wizard.wifi_check', {
            url: '/wifi_check',
            templateUrl: 'app/wizard/wifi_check.html',
            controller: 'handshakeController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(23); }}
        })
       .state('wizard.confirm_handshake', {
            url: '/confirm_handshake',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(24); }}
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
        })
        .state('wizard.final', {
            url: '/final',
            templateUrl: 'app/wizard/final.html',
            controller: 'finalController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(100); }}
        })
        .state('unavailable', {
            url: '/unavailable',
            templateUrl: 'app/wizard/unavailable.html',
            controller: 'baseController',
            resolve: { scopePayload: function(SegueService){ return SegueService.prep(0); }}
        });
    
    /* Default state */
    $urlRouterProvider.otherwise('/wizard/landing');
    
    RestangularProvider.setBaseUrl('https://api.smartcitizen.me/v0');

    $locationProvider.html5Mode({ // <<breaks
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
});