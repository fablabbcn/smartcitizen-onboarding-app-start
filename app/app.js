'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngAnimate'
])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        //// route to show our basic form (/form)
        //    .state('form', {
        //        url: '/form',
        //        templateUrl: 'form.html',
        //        controller: 'formController'
        //    })
        //
        //    // nested states
        //    // each of these sections will have their own view
        //    // url will be nested (/form/profile)
        //    .state('form.profile', {
        //        url: '/profile',
        //        templateUrl: 'form-profile.html'
        //    })
        //
        //    // url will be /form/interests
        //    .state('form.interests', {
        //        url: '/interests',
        //        templateUrl: 'form-interests.html'
        //    })
        //
        //    // url will be /form/payment
        //    .state('form.payment', {
        //        url: '/payment',
        //        templateUrl: 'form-payment.html'
        //    })



            // route to show our basic form (/form)
            .state('wizard', {
                url: '/wizard',
                templateUrl: 'wizard/wizard.html',
                controller: 'wizardCtrl'
            })
            .state('wizard.landing', {
                url: '/landing',
                templateUrl: 'wizard/landing.html'
            })
            .state('wizard.collaborators', {
                url: '/collaborators',
                templateUrl: 'wizard/collaborators.html',
            })
            .state('wizard.currentdevice', {
                url: '/currentdevice',
                templateUrl: 'wizard/currentdevice.html'
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
                "segueButton": "Woop!"
            },{
                "index": 2,
                "template": "collaborators",
                "companyLogo": "20160301 MAKING SENSE LOGOS-07.png",
                "h1": "Making Sense is a project to help people make sense of their environment.",
                "h4": "We want to help you deploy sensors to help understand sound pollution. By making sense of the issue, we might be able to address it.",

                "currentState": "What is Making Sense",
                "segueButton": "SOUNDS GOOD!"
            },{
                "index": 3,
                "template": "collaborators",
                "companyLogo": "SCK_logo.png",
                "h1": "Smart Citizen is a movement for civic participation in a modern world",
                "h4": "Smart Citizen creates open tools for citizens to be better informed about the world around them.",
                "currentState": "What is Smart Citizen",
                "segueButton": "CONTINUE"
            },{
                "index": 4,
                "template": "staticKit",
                "kitImage": "SCK_image.png",
                "h4": "This sensor is a Smart Citizen kit for environmental sensing. It measures sound, air quality, humidity, and lots of other things",
                "currentState": "What is Smart Citizen",
                "segueButton": "LET’S SET UP MY SENSOR"
            },{
                "index": 5,
                "template": "",
                "currentState": "WHAT’S IN THE BOX",
                "h1": "First of all, let’s make sure we have everything we need.",
                "h4": "We need a few things to set up the sensor. Let’s see if you’ve recieved them",
                "segueButton": "LETS DO IT"
            }];

        //change the end of this line to start on different pages
        var index = typeof index !== 'undefined' ? index : 1;

        function bindContent(index){
            var content = pageContent[index];
            $scope.h1 = content.h1;
            $scope.h2 = content.h2;
            $scope.h3 = content.h3;
            $scope.h4 = content.h4;

            $scope.currentState = content.currentState;
            $scope.segueButton = content.segueButton;

            $scope.companyLogo = "images/" + content.companyLogo;
            console.log(content.companyLogo);
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
                alert('/wizard/' + nextTemplate);
            }
            bindContent(index);
        };

    });
