'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngAnimate',
])
    .config(function($stateProvider, $urlRouterProvider) {

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
            templateUrl: 'wizard/collaborators.html',
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
        .state('wizard.kitbuilt', {
            url: '/kitbuilt',
            templateUrl: 'wizard/kitbuilt.html'
        })
        .state('wizard.pair1', {
            url: '/pair1',
            templateUrl: 'wizard/pair1.html'
        })
        .state('wizard.pair2', {
            url: '/pair2',
            templateUrl: 'wizard/pair2.html'
        });

        $urlRouterProvider.otherwise('/wizard/landing');
    })
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function () {
            alert('awesome!');
        };
    })
    .controller('wizardCtrl', function($scope, $location){
        /** Constants **/
        var pageContent = [
            {
                "index": 0,
                "template": "landing",
                "h1": "You've made it to the Making Sense pilot",
                "h4": "Let’s get you set up with a Smart Citizen kit, and sensing in no time",
                "currentState": "Welcome",
                "segueButton": "Woop!"
            },{
                "index": 1,
                "template": "currentdevice",
                "h1": "What device are you using to set up the sensor?",
                "h4": "We need to know this to optimise the setup",
                "currentState": "Welcome",
                "segueButton": "Continue!"
            },{
                "index": 2,
                "template": "collaborators",
                "companyLogo": "20160301 MAKING SENSE LOGOS-07.png",
                "h1": "Making Sense is a project to help people make sense of their environment.",
                "h4": "We want to help you deploy sensors to help understand sound pollution. By making sense of the issue, we might be able to address it.",
                "currentState": "What is Making Sense",
                "segueButton": "SOUNDS GOOD!"
            },
            {
                "index": 3,
                "template": "collaborators",
                "companyLogo": "MS_BWPOS_G_LRG.png",
                "h1": "Smart Citizen is a movement for civic participation in a modern world",
                "h4": "Smart Citizen creates open tools for citizens to be better informed about the world around them.",
                "currentState": "What is Smart Citizen",
                "segueButton": "CONTINUE"
            },{
                "index": 4,
                "template": "basic2",
                "image": "sck_iso-1295.jpg",
                "h4": "This sensor is a Smart Citizen kit for environmental sensing. It measures sound, air quality, humidity, and lots of other things",
                "currentState": "What is Smart Citizen",
                "segueButton": "LET’S SET UP MY SENSOR"
            },
            {
                "index": 5,
                "template": "basic",
                "currentState": "WHAT’S IN THE BOX",
                "h1": "First of all, let’s make sure we have everything we need.",
                "h4": "We need a few things to set up the sensor. Let’s see if you’ve recieved them",
                "segueButton": "LETS DO IT"
            },{
                "index": 6,
                "template": "selectparts",
                "currentState": "WHAT’S IN THE BOX",
                "h2": "Click on all the things you have received",
                "contextButton": "where is my enclosure?",
                "segueButton": "Done"
            },
            {
                "index": 7,
                "template": "kitbuilt",
                "currentState": "Put it together",
                "h2": "Let's put this all together",
                "h4": "Connect the sensor board to the hardware board.",
                "segueButton": "Done"
            },{
                "index": 8,
                "template": "kitbuilt",
                "currentState": "Give it juice",
                "h2": "Let's give it some juice",
                "h4": "Connect the battery to the hardware board.",
                "segueButton": "Done"
            },{
                "index": 9,
                "template": "kitbuilt",
                "currentState": "Press Button",
                "h2": "Turn the sensor on",
                "h4": "Push the button on the hardware sensor, once.",
                "segueButton": "It's alive"
            },{
                "index": 10,
                "template": "basic2",
                "image": "sck_iso-1295.jpg",
                "h1": "To set up the sensor let's find it on the WiFi menu",
                "h4": "Click the 'Smart Citizen Kit' from the dropdown",
                "currentState": "pair the sensor",
                "segueButton": "its alive"
            },{
                "index": 11,
                "template": "pair1",
                "h1": "Find your WiFi network from the list below",
                "currentState": "pair the sensor",
                "segueButton": "Done"
            },{
                "index": 12,
                "template": "pair2",
                "h1": "Almost there. What is the Password for the network?",
                "h4": "We need this to set up your device’s connection to the internet",
                "currentState": "pair the sensor",
                "segueButton": "Check Password"
            },{
                "index": 13,
                "template": "basic2",
                "image": "sck_iso-1295.jpg",
                "h1": "Success! We've got the sensor online",
                "h4": "Now just go to your wi-fi menu and connect back to your wi-fi network to continue the setup.",
                "currentState": "pair the sensor",
                "segueButton": "its alive"
            }];

        //change the end of this line to start on different pages
        var index = typeof index !== 'undefined' ? index : 0;

        function bindContent(index){
            var content = pageContent[index];
            $scope.h1 = content.h1;
            $scope.h2 = content.h2;
            $scope.h3 = content.h3;
            $scope.h4 = content.h4;

            $scope.currentState = content.currentState;
            $scope.segueButton = content.segueButton;
            $scope.contextButton = content.contextButton;


            $scope.companyLogo = "images/" + content.companyLogo;
            $scope.image = "images/" + content.image;

            //sanity and comparative check
            $scope.index = index;
            $scope.template = content.template;
            console.log('binded');

        };
        bindContent(index);
        console.log('controllerLoaded');


        /** Functions below **/
        $scope.seque = function() {
            index++;
            //compare templates
            var nextTemplate = pageContent[index].template;
            if (nextTemplate !== $scope.template) {
                //if new is made update template
                $location.path('/wizard/' + nextTemplate);
                //alert('/wizard/' + nextTemplate);
            }
            bindContent(index);
        };



    });
