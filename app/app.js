'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'ngGeolocation',
    'uiGmapgoogle-maps'])
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
        .state('wizard.kitbuild1', {
            url: '/kitbuild1',
            templateUrl: 'wizard/kitbuild1.html'
        })
        .state('wizard.kitbuild2', {
            url: '/kitbuild2',
            templateUrl: 'wizard/kitbuild2.html'
        })
        .state('wizard.kitbuild3', {
            url: '/kitbuild3',
            templateUrl: 'wizard/kitbuild3.html'
        })
        .state('wizard.pair1', {
            url: '/pair1',
            templateUrl: 'wizard/pair1.html'
        })
        .state('wizard.pair2', {
            url: '/pair2',
            templateUrl: 'wizard/pair2.html'
        }).state('wizard.sensorName', {
            url: '/sensorName',
            templateUrl: 'wizard/sensorName.html'
        })
        .state('wizard.location1', {
            url: '/location1',
            templateUrl: 'wizard/location1.html',
            controller: 'locationController'
        })
        .state('wizard.location2', {
            url: '/location2',
            templateUrl: 'wizard/location2.html',
        }).state('wizard.location3', {
            url: '/location3',
            templateUrl: 'wizard/location3.html',
        });

        $urlRouterProvider.otherwise('/wizard/landing');
    })
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
    })
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function () {
            alert('awesome!');
        };
    })
    .controller('wizardCtrl', function($scope, $location, $sce){
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
                "companyLogo": "smart_citizen.png",
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
                "template": "kitbuild1",
                "currentState": "Put it together",
                "h2": "Let's put this all together",
                "text": "Connect the [] to the [].",
                "tooltip": [
                    {
                        "trigger": "sensor board",
                        "title": "Sensor Board",
                        "body": "Bacon ipsum dolor amet bresaola chicken drumstick swine. Turducken chuck pastrami.",
                        "bodyImage": "",
                        "linkText": "Need help"
                    },{
                        "trigger": "hardware board",
                        "title": "Hardware board",
                        "body": "Bacon ipsum dolor amet bresaola chicken drumstick swine. Turducken chuck pastrami.",
                        "bodyImage": "",
                        "linkText": "Need help"
                    }
                ],
                "segueButton": "Done"
            },{
                "index": 8,
                "template": "kitbuild2",
                "currentState": "Give it juice",
                "h2": "Let's give it some juice",
                "text": "Connect [] to the [].",
                "tooltip": [
                    {
                        "trigger": "battery cable",
                        "title": "Battery Cable",
                        "body": "Bacon ipsum dolor amet bresaola chicken drumstick swine. Turducken chuck pastrami.",
                        "bodyImage": "",
                        "linkText": "Need help"
                    },{
                        "trigger": "hardware board",
                        "title": "Hardware board",
                        "body": "Bacon ipsum dolor amet bresaola chicken drumstick swine. Turducken chuck pastrami.",
                        "bodyImage": "",
                        "linkText": "Need help"
                    }
                ],
                "segueButton": "Done"
            },{
                "index": 9,
                "template": "kitbuild3",
                "currentState": "Press Button",
                "h2": "Turn the sensor on",
                "text": "Push the button on the [], once.",
                "tooltip": [
                    {
                        "trigger": "hardware board",
                        "title": "Hardware board",
                        "body": "Bacon ipsum dolor amet bresaola chicken drumstick swine. Turducken chuck pastrami.",
                        "bodyImage": "",
                        "linkText": "Need help"
                    }
                ],
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
            },{
                "index": 14,
                "template": "sensorName",
                "h1": "Lets give your sensor a name",
                "h4": "This is so we can refer to it later",
                "currentState": "your sensor",
                "contextButton": "generate a random name",
                "segueButton": "done"
            },{
                "index": 15,
                "template": "location1",
                "h1": "Well need to know your location to add it to the global Smart Citizen map",
                "h4": "Press ‘Allow’ on the pop up to automatically let us know where to pin the sensor",
                "h6":"You can click 'Block' on the popup and set your location manually on the next step",
                "currentState": "location",
                "segueButton": "done"
            },{
                "index": 16,
                "template": "location2",
                "h1": "Select which best fits your sensor's home",
                "h4": "This will help us better understand the data you are sensing",
                "currentState": "location",
                "segueButton": "done"
            },{
                "index": 17,
                "template": "location3",
                "h1": "Awesome now lets pinpoint your kit's location",
                "h4": "Drag and drop the pin to your sensors current location",
                "currentState": "location",
                "segueButton": "done"
            }];

        //change the end of this line to start on different pages
        var index = typeof index !== 'undefined' ? index : 15;

        function bindContent(index){
            var content = pageContent[index];
            $scope.h1 = content.h1;
            $scope.h2 = content.h2;
            $scope.h3 = content.h3;
            $scope.h4 = content.h4;
            $scope.h6 = content.h6;


            if (typeof content.tooltip !== 'undefined') {
                console.log(content.tooltip);
                var plain = content.text.split('[]');
                var text = "<p>";
                for (var i = 0; i < content.tooltip.length; i++) {
                    text += plain[i];
                    text += "<span class='tooltip tooltip-effect-1'>" +
                        "<span class='tooltip-item'>" + content.tooltip[i].trigger + "</span>" +
                        "<span class='tooltip-content clearfix'><img src='images/"+ content.tooltip[i].bodyImage+"'>"+
                        "<span class='tooltip-text'><strong>"+ content.tooltip[i].title +": </strong>" +
                        content.tooltip[i].body + " <a href='#'>"+ content.tooltip[i].linkText +"</a></span></span></span>"
                }
                text += plain[content.tooltip.length] + "<p>";
                console.log(text);
                $scope.buildInstructions = $sce.trustAsHtml(text);
            }


            $scope.buildInstructions = content.buildInstructions;


            $scope.currentState = content.currentState;
            $scope.segueButton = content.segueButton;
            $scope.contextButton = content.contextButton;


            $scope.companyLogo = "images/" + content.companyLogo;
            $scope.image = "images/" + content.image;

            //sanity and comparative check
            $scope.index = index;
            $scope.template = content.template;

            $scope.pos;
            console.log($scope.pos);

            if (typeof $scope.pos !== 'undefined') {
                $scope.map = {
                    center: {latitude: $scope.pos.coords.latitude, longitude: $scope.pos.coords.longitude},
                    zoom: 16,

                    markersEvents: {
                        dragend: function (mapModel, eventName, marker, orignalEventArgs) {
                            console.log(marker.coords);
                            //console.log(originalEventArgs[0].latLng);
                        }
                    }
                };
                $scope.markerLocation = { latitude: $scope.pos.coords.latitude, longitude: $scope.pos.coords.longitude };
            }
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


    })
    .controller('locationController', function($scope, uiGmapGoogleMapApi, $geolocation){

        $geolocation.getCurrentPosition({
            timeout: 10000
        }).then(function(position) {
            if (typeof position.error !== 'undefined') {
                console.log(position.error); // ERROR HAPPENED
            } else {
                $scope.pos = position;
                //console.log($scope.$parent.index);
                //console.log($scope.pos);

                $scope.$parent.pos = $scope.pos;
                //console.log($scope.$parent.pos);
            }
        });
        uiGmapGoogleMapApi.then(function(maps) {
            console.log('maps loaded');
        });
    });
