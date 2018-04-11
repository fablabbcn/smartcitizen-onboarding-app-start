'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {

    $stateProvider

    /** -- INTRO -- **/
        .state('wizard', {
            url: '/wizard',
            templateUrl: 'app/wizard/wizard.html',
            controller: 'wizardCtrl',
            resolve: {
                session: function (platform, $state) {
                    return platform.getSession().then(function (session) {
                        platform.setSession(session);
                        //console.log(session);
                        // This ensure user will be always redirected temporary to avoid state issues
                        return session;
                    }, function () {
                        $state.go('unavailable');
                        //return true;
                    });
                }
            }
        })
        .state('wizard.landing', {
            url: '/landing?lang',            //<< find way to remove these
            templateUrl: 'app/wizard/landing.html',
            controller: 'landingController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(0, $stateParams.lang);
                }
            }
        })
        .state('wizard.making_sense', {
            url: '/making_sense?lang',
            templateUrl: 'app/wizard/collaborators.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(1, $stateParams.lang);
                }
            }
        })
        .state('wizard.smart_citizen', {
            url: '/smart_citizen?lang',
            templateUrl: 'app/wizard/collaborators.html',
            controller: 'smartCitizenController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(2, $stateParams.lang);
                }
            }
        })
        .state('wizard.smart_citizen2', {
            url: '/smart_citizen_brief?lang',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'smartCitizenController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(3, $stateParams.lang);
                }
            }
        })
        .state('wizard.basic2', {
            url: '/smart_citizen_brief2?lang',
            templateUrl: 'app/wizard/basic2.html',
            controller: 'smartCitizenController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(4, $stateParams.lang);
                }
            }
        })


        /** -- WHATS IN THE BOX -- **/
        .state('wizard.basic', {
            url: '/whats_in_the_box?lang',
            templateUrl: 'app/wizard/basic.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(10, $stateParams.lang);
                }
            }
        })
        .state('wizard.selectparts', {
            url: '/kit_parts?lang',
            templateUrl: 'app/wizard/selectparts.html',
            controller: 'stateCtlr',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(11, $stateParams.lang);
                }
            }
        })
        .state('wizard.selectparts2', {
            url: '/case?lang',
            templateUrl: 'app/wizard/selectparts2.html',
            controller: 'stateCtlr',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(12, $stateParams.lang);
                }
            }
        })
        .state('wizard.confirm_parts', {
            url: '/confirm_parts?lang',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(13, $stateParams.lang);
                }
            }
        })
        .state('wizard.kitbuild1', { // TODO - fix this output
            url: '/kitbuild_1?lang',
            templateUrl: 'app/wizard/kitbuild1.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(14, $stateParams.lang);
                }
            }
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild_2?lang',
            templateUrl: 'app/wizard/kitbuild2.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(15, $stateParams.lang);
                }
            }
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild_3?lang',
            templateUrl: 'app/wizard/kitbuild3.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(16, $stateParams.lang);
                }
            }
        })
        .state('wizard.kitbuild4', {
            url: '/kitbuild_4?lang',
            templateUrl: 'app/wizard/kitbuild4.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(17, $stateParams.lang);
                }
            }
        })
        .state('wizard.case1', {
            url: '/case_1?lang',
            templateUrl: 'app/wizard/casing.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(18, $stateParams.lang);
                }
            }
        })
        // .state('wizard.case2', {
        //     url: '/case_2?lang',
        //     templateUrl: 'app/wizard/casing.html',
        //     controller: 'baseController',
        //     resolve: {
        //         scopePayload: function (SegueService, $stateParams) {
        //             return SegueService.prep(19, $stateParams.lang);
        //         }
        //     }
        // })

        .state('wizard.confirm_build', {
            url: '/confirm_build?lang',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(19, $stateParams.lang);
                }
            }
        })


        /** -- WIFI HANDSHAKE-- **/
        .state('wizard.accesspoint_pre', {
            url: '/accesspoint_pre?lang',
            templateUrl: 'app/wizard/basic.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(30, $stateParams.lang);
                }
            }
        })
        .state('wizard.accesspoint_1', {
            url: '/accesspoint_1?lang',
            templateUrl: 'app/wizard/prompted_entry.html',
            controller: 'accesspointController_base',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(31, $stateParams.lang);
                }
            }
        })
        .state('wizard.accesspoint_2', {
            url: '/accesspoint_2?lang',
            templateUrl: 'app/wizard/prompted_entry2_image.html',
            controller: 'accesspointController_base',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(32, $stateParams.lang);
                }
            }
        })
        .state('wizard.ap_final', {
            url: '/ap_final?lang',
            templateUrl: 'app/wizard/prompted_entry.html',
            controller: 'accesspointController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(33, $stateParams.lang);
                }
            }
        })


        /** -- NAME -- **/
        .state('wizard.sensorName_prep', {
            url: '/sensorName_prep?lang',
            templateUrl: 'app/wizard/basic.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(40, $stateParams.lang);
                }
            }
        })
        .state('wizard.sensorName', {
            url: '/sensorName?lang',
            templateUrl: 'app/wizard/sensorName.html',
            controller: 'nameCtlr',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(41, $stateParams.lang);
                }
            }
        })


        /** -- LOCATION -- **/
        .state('wizard.location_prep', {
            url: '/location_prep?lang',
            templateUrl: 'app/wizard/location_prep.html',
            controller: 'locationController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(50, $stateParams.lang);
                }
            }
        })
        .state('wizard.location_map', {
            url: '/location_map?lang',
            templateUrl: 'app/wizard/location_map.html',
            controller: 'locationController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(51, $stateParams.lang);
                }
            }
        })
         .state('wizard.location_tags', {
         url: '/location_tags?lang',
         templateUrl: 'app/wizard/location_tags.html',
         controller: 'locationController',
             resolve: {
                 scopePayload: function (SegueService, $stateParams) {
                     return SegueService.prep(52, $stateParams.lang);
                 }
             }
         })
        .state('wizard.confirm_location', {
            url: '/confirm_location?lang',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(53, $stateParams.lang);
                }
            }
        })



        /** -- HANDSHAKE -- **/
        .state('wizard.wifi_enter', {
            url: '/wifi_enter?lang',
            templateUrl: 'app/wizard/wifi_enter.html',
            controller: 'handshakeController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(21, $stateParams.lang);
                }
            }
        })
        .state('wizard.handshake', {
            url: '/handshake?lang',
            templateUrl: 'app/wizard/handshake.html',
            controller: 'handshakeController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(22, $stateParams.lang);
                }
            }
        })
        .state('wizard.wifi_check', {
            url: '/wifi_check?lang',
            templateUrl: 'app/wizard/wifi_check.html',
            controller: 'handshakeController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(23, $stateParams.lang);
                }
            }
        })
        .state('wizard.confirm_handshake', {
            url: '/confirm_handshake?lang',
            templateUrl: 'app/wizard/confirm.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(24, $stateParams.lang);
                }
            }
        })

        /** --  ACCOUNT -- **/
        .state('wizard.account1', {
            url: '/email?lang',
            templateUrl: 'app/wizard/account1.html',
            controller: 'accountController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(90, $stateParams.lang);
                }
            }
        })
        .state('wizard.login', {
            url: '/login?lang',
            templateUrl: 'app/wizard/login.html',
            controller: 'accountController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(91, $stateParams.lang);
                }
            }
        })
        .state('wizard.account2', {
            url: '/username?lang',
            templateUrl: 'app/wizard/make_account1.html',
            controller: 'accountController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(95, $stateParams.lang);
                }
            }
        })
        .state('wizard.account3', {
            url: '/password?lang',
            templateUrl: 'app/wizard/make_account2.html',
            controller: 'accountController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(96, $stateParams.lang);
                }
            }
        })
        .state('wizard.final', {
            url: '/final?lang',
            templateUrl: 'app/wizard/final.html',
            controller: 'finalController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(100, $stateParams.lang);
                }
            }
        })
        .state('unavailable', {
            url: '/unavailable?lang',
            templateUrl: 'app/wizard/unavailable.html',
            controller: 'baseController',
            resolve: {
                scopePayload: function (SegueService, $stateParams) {
                    return SegueService.prep(0, $stateParams.lang);
                }
            }
        });

    /* Default state */
    $urlRouterProvider.otherwise('/wizard/landing?lang=eng');

    RestangularProvider.setBaseUrl('https://api.smartcitizen.me/v0');

    $locationProvider.html5Mode({ // <<breaks
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
});