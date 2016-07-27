'use strict';

var module = angular.module('myApp.wizard', ['ngRoute']);


module.controller('wizardCtrl', ['$scope', //'contentFact',             //the fuck wont this work?! >_< (and the line below too)
    function ($scope, $http){ //, contentFact) {


        var content;

        //contentFact.getContentForIndex(contentFact.getIndex()) // lol... lazy coding and this is broken because import above^

        content = { //to test dif templates change below v from wizard/content.json ... pain in ayass
            "index": 0,
            "template": "landing",
            "h1": "You've made it to the Making Sense pilot",
            "h4": "Let’s get you set up with a Smart Citizen kit, and sensing in no time",
            "currentState": "Welcome",
            "segueButton": "Woop!"
        };

        //unload all variables
        $scope.h1 = content.h1;
        $scope.h2 = content.h2;
        $scope.h3 = content.h3;
        $scope.h4 = content.h4;
        $scope.currentState = content.currentState;
        $scope.segueButton = content.segueButton;
    }])
    .factory('contentFact', function(index) {   //check and make sure factories do not get re initialized
        var index = typeof index !== 'undefined' ? index : 0;
        var CONTENT;
        //$http.get('wizard/content.json').success(function(data) {
        //    CONTENT = data;
        //});
    return {
        getIndex: function () {
            return index;
        },
        getContentForIndex: function (val) {
            return CONTENT.pages[val];
        }
    }
});

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'wizard/landing.html',
        controller: 'wizardCtrl'
    });
}]);

