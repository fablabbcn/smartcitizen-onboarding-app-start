'use strict';

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    // route to show our basic form (/form)
        .state('wizard', {
            url: '/wizard',
            templateUrl: '../wizard.html',
            controller: 'wizardCtrl'
        })
        .state('wizard.landing', {
            url: '/landing',            //<< find way to remove these
            templateUrl: '../landing.html'
        })
        .state('wizard.currentdevice', {
            url: '/currentdevice',
            templateUrl: '../currentdevice.html',
            controller: 'stateCtlr'
        })
        .state('wizard.collaborators', {
            url: '/collaborators',
            templateUrl: '../collaborators.html',
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
            templateUrl: '../basic2.html'
        })
        .state('wizard.basic', {
            url: '/basic',
            templateUrl: '../basic.html'
        })
        .state('wizard.selectparts', {
            url: '/selectparts',
            templateUrl: '../selectparts.html',
            controller: 'stateCtlr'
        })
        .state('wizard.kitbuild1', {
            url: '/kitbuild1',
            templateUrl: '../kitbuild1.html'
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild2',
            templateUrl: '../kitbuild2.html'
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild3',
            templateUrl: '../kitbuild3.html'
        })
        .state('wizard.pair1', {
            url: '/pair1',
            templateUrl: '../pair1.html'
        })
        .state('wizard.pair2', {
            url: '/pair2',
            templateUrl: '../pair2.html'
        }).state('wizard.sensorName', {
            url: '/sensorName',
            templateUrl: '../sensorName.html',
            controller: 'nameCtlr'
        })
        .state('wizard.location1', {
            url: '/location1',
            templateUrl: '../location1.html',
            controller: 'locationController'
        })
        .state('wizard.location2', {
            url: '/location2',
            templateUrl: '../location2.html',
            controller: 'stateCtlr'
        })
        .state('wizard.location3', {
            url: '/location3',
            templateUrl: '../location3.html',
            controller: 'locationController'
    });

    $urlRouterProvider.otherwise('/wizard/landing');
});