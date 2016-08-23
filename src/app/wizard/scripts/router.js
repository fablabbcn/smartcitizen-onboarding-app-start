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
            templateUrl: 'app/wizard/landing.html'
        })
        .state('wizard.currentdevice', {
            url: '/currentdevice',
            templateUrl: 'app/wizard/currentdevice.html',
            controller: 'stateCtlr'
        })
        .state('wizard.collaborators', {
            url: '/collaborators',
            templateUrl: 'app/wizard/collaborators.html'
            //resolve: {
            //    simpleObj:  function() {
            //        return {value: 'simple!'};
            //    }
            //} https://medium.com/opinionated-angularjs/advanced-routing-and-resolves-a2fcbf874a1c#.3t94xes5q
            // https://github.com/angular-ui/ui-router/wiki
            // www.ng-newsletter.com/posts/angular-ui-router.html
            // https://scotch.io/tutorials/angularjs-multi-step-form-using-ui-router
        })
        .state('wizard.basic2', {
            url: '/basic2',
            templateUrl: 'app/wizard/basic2.html'
        })
        .state('wizard.basic', {
            url: '/basic',
            templateUrl: 'app/wizard/basic.html'
        })
        .state('wizard.selectparts', {
            url: '/selectparts',
            templateUrl: 'app/wizard/selectparts.html',
            controller: 'stateCtlr'
        })
        .state('wizard.kitbuild1', { // TODO - fix this output
            url: '/kitbuild1',
            templateUrl: 'app/wizard/kitbuild1.html'
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild2',
            templateUrl: 'app/wizard/kitbuild2.html'
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild3',
            templateUrl: 'app/wizard/kitbuild3.html'
        })
        .state('wizard.pair1', {
            url: '/pair1',
            templateUrl: 'app/wizard/pair1.html'
        })
        .state('wizard.pair2', {
            url: '/pair2',
            templateUrl: 'app/wizard/pair2.html'
        }).state('wizard.sensorName', {
            url: '/sensorName',
            templateUrl: 'app/wizard/sensorName.html',
            controller: 'nameCtlr'
        })
        .state('wizard.location1', {
            url: '/location1',
            templateUrl: 'app/wizard/location1.html',
            controller: 'locationController'
        })
        .state('wizard.location2', {
            url: '/location2',
            templateUrl: 'app/wizard/location2.html',
            controller: 'stateCtlr'
        })
        .state('wizard.location3', {
            url: '/location3',
            templateUrl: 'app/wizard/location3.html',
            controller: 'locationController'
    });

    /* Default state */
    $urlRouterProvider.otherwise('/wizard/landing');

    $locationProvider.html5Mode({ // <<breaks
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
});