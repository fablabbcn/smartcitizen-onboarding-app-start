'use strict';

var module = angular.module('myApp.wizard');


module.controller('wizardCtrl', function ($scope) {


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

    $scope.formData = 'd';
});