'use strict';

angular.module('app').service('SegueService', function() {

    var pageContent = [
        {

        /** -- INTRO -- **/
            "index": 0,
            "template": "landing",
            "url": "landing",
            "h1": "You've made it to the Making Sense pilot!",
            "h4": "Let’s get you set up with a Smart Citizen kit, and sensing in no time",
            "currentState": "WELCOME",
            "segueButton": "LET'S DO THIS"
        },{
            "index": 1,
            "template": "collaborators",
            "url":"us",
            "companyLogo": "app/images/20160301 MAKING SENSE LOGOS-07.png",
            "h2": "Making Sense is a project to help people make sense of their environment.",
            "h4": "We want to help you deploy sensors to help understand sound pollution. By making sense of the issue, we might be able to address it.",
            "currentState": "What is Making Sense",
            "segueButton": "SOUNDS GOOD!"
        },
        {
            "index": 2,
            "template": "collaborators",
            "url":"smart_citizen",
            "companyLogo": "app/images/smart_citizen.png",
            "h2": "Smart Citizen is a movement for civic participation in a modern world",
            "h4": "Smart Citizen creates open tools for citizens to be better informed about the world around them.",
            "currentState": "What is Smart Citizen",
            "segueButton": "CONTINUE"
        },{
            "index": 3,
            "template": "basic2",
            "url":"smart_citizen_brief",
            "image": "app/images/sck_iso-1295.jpg",
            "h4": "This sensor is a Smart Citizen kit for environmental sensing. It measures sound, air quality, humidity, and lots of other things",
            "currentState": "What is Smart Citizen",
            "segueButton": "LET’S SET UP MY SENSOR"
        },

    /** -- WHATS IN THE BOX -- **/
        {
            "index": 10,
            "template": "basic",
            "url":"whats_in_the_box",
            "currentState": "WHAT’S IN THE BOX",
            "h1": "LET'S SET UP THE SENSOR",
            "h4": "There's a few pieces we need to set up the kit, let's check we have them all",
            "segueButton": "I'M READY"
        },{
            "index": 11,
            "template": "selectparts",
            "url":"kit_parts",
            "currentState": "WHAT’S IN THE BOX",
            "h2": "Click on all the things you have received",
            "h4": "We need to know this to make the set up work smoothly",
            "contextButton": "where is my enclosure?",
            "segueButton": "CONTINUE",
            "segueButtonError": "Are you missing parts?"
        },
        {
            "index": 12,
            "template": "kitbuild1",
            "url":"kitbuild_1",
            "currentState": "Put it together",
            "h2": "First, we connect the sensors",
            "text": "Connect the pins on the [] to the [].",
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
            "segueButton": "DONE"
        },{
            "index": 13,
            "template": "kitbuild2",
            "url":"kitbuild_2",
            "currentState": "Give it juice",
            "h2": "Let's give it some power",
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
            "segueButton": "DONE"
        },{
            "index": 14,
            "template": "kitbuild3",
            "url":"kitbuild_3",
            "currentState": "Press Button",
            "h2": "Turn the sensor on",
            "text": "Push the button on the sensor, once.",
            "tooltip": [
                {
                    "trigger": "hardware board",
                    "title": "Hardware board",
                    "body": "Bacon ipsum dolor amet bresaola chicken drumstick swine. Turducken chuck pastrami.",
                    "bodyImage": "",
                    "linkText": "Need help"
                }
            ],
            "segueButton": "IT'S ALIVE"
        },


    /** -- NAMING -- **/
        {
            "index": 40,
            "template": "sensorName",
            url: 'sensorName',
            "h1": "Lets give your sensor a name",
            "h4": "This is so we can refer to it later",
            "currentState": "your sensor",
            "contextButton": "generate a random name",
            "segueButton": "DONE"
        },


    /** -- LOCATION -- **/
        {
            "index": 50,
            "template": "location1",
            url: 'location1',
            "h2": "Next, how about a location so we can add it to the global map?",
            "h4": "Press ‘Allow’ on the pop up to automatically let us know where to pin the sensor",
            "h6":"You can click 'Block' on the popup and set your location manually on the next step",
            "currentState": "location",
            "segueButton": "DONE"
        },{
            "index": 51,
            "template": "location2",
            url: 'location2',
            "h2": "Select which best fits your sensor's home",
            "h4": "This will help us better understand the data you are sensing",
            "currentState": "location",
            "segueButton": "DONE"
        },{
            "index": 52,
            "template": "location3",
            url: 'location3',
            "h1": "Awesome, now lets pinpoint your kit's location",
            "h4": "Drag and drop the pin to your sensors current location",
            "currentState": "location",
            "segueButton": "DONE"
        },


    /** -- LIGHT HANDSHAKE -- **/
        {
            "index": 20,
            "template": "basic3",
            "url":"handshake_prep",
            "image": "app/images/sck_iso-1295.jpg",
            "h2": "To set up the sensor let's find it on the WiFi menu",
            "h4": "Click the 'Smart Citizen Kit' from the dropdown",
            "currentState": "pair the sensor",
            "segueButton": "IT'S ALIVEe"
        },{
            "index": 21,
            "template": "handshake",
            url: 'handshake',
            "h2": "Please provide your WIFI information below",
            "h4a": "Enter the name of your WIFI network",
            "h4b":"And now, the password",
            "segueButton": "CONNECT TO WIFI"
        },


    /** -- WIFI HANDSHAKE -- **/
        {
            "index": 30,
            "template": "pair1",
            "url":"pair_1",
            "h2": "Find your WiFi network from the list below",
            "currentState": "pair the sensor",
            "segueButton": "DONE"
        },{
            "index": 31,
            "template": "pair2",
            "url":"pair_2",
            "h2": "Almost there. What is the Password for the network?",
            "h4": "We need this to set up your device’s connection to the internet",
            "currentState": "pair the sensor",
            "segueButton": "CHECK PASSWORD"
        },{
            "index": 32,
            "template": "basic2",
            "url": 'wifi_success',
            "image": "app/images/sck_iso-1295.jpg",
            "h1": "Success! We've got the sensor online",
            "h4": "Now just go to your wi-fi menu and connect back to your wi-fi network to continue the setup.",
            "currentState": "pair the sensor",
            "segueButton": "ITS ALIVE"
        },


    /** -- ACCOUNT HERE -- **/
        {
            "index": 90,
            "template": "account1",
            url: 'email',
            "h1": "Last step! time to save everything",
            "h4": "How about an email so we can become friends?",
            "segueButton": "NEXT"
        },
        {
            "index": 91,
            "template": "login",
            url: 'login',
            "h2a": "Awesome, welcome back",
            "h2b":"enter your password below to finish!",
            "h4": "This will push all of your new sensor's data to your account",
            "segueButton": "ADD MY NEW KIT"
        },
        {
            "index": 95,
            "template": "make1",
            url: 'username',
            "h2": "And now a username so the community can identify you",
            "h4": "This will be publicly linked to your sensors data",
            "segueButton": "YAY FRIENDS"
        },
        {
            "index": 96,
            "template": "make2",
            url: 'password',
            "h2": "Now, filly a password to secure everything",
            "h4a": "the password has to be at least 8 characters long",
            "h4b":"And one more time to make sure there are no mistakes",
            "segueButton": "ALL DONE!"
        }

    ];

    function getPageContent(val){
        for(var i = 0; i < pageContent.length; i++)
        {
            if(pageContent[i].index == val)
            {
                return(pageContent[i]);
            }
        }
    }
    function getURLContent(url){
        for(var i = 0; i < pageContent.length; i++)
        {
            if(pageContent[i].url == url)
            {
                return(pageContent[i]);
            }
        }
    }

    this.prep = function(val){
        return payloadGenerate(getPageContent(val))
    };

    this.nextPage = function(val){
        if (val == 3) {
            return('whats_in_the_box');
        } else if (val == 14) {
            return ('handshake_prep');
        } else if (val == 21) {
            return ('sensorName');
        } else if (val == 40) {
            return ('location1');
        } else if (val == 52) {
            return ('email');
        }
        else {
            return getPageContent(val + 1).url;
        }
    };
    this.previousPage = function(val){
        if (val == 10) {
            return('smart_citizen_brief')
        } else if (val == 20){
            return('kitbuild_3')
        } else if (val == 40) {
            return ('handshake');
        } else if (val == 50) {
            return('sensorName');
        } else if (val == 90){
            return('location3');
        }
        else
        {
            return getPageContent(val - 1).url;
        }
    };

    function payloadGenerate(content){
        var payload = content;
        payload.progressVal = ((content.index + 1) / pageContent.length) * 100;

        payload.companyLogo = content.companyLogo;
        payload.image = content.image;


        if (content.index >= 1) {
            payload.backBlock = '';
        } else {
            payload.backBlock = 'hide';
        }
        if (content.index >= 1) {
            payload.forwardBlock = 'blocked';
        } else {
            payload.forwardBlock = 'hide';
        }

        return payload;
    }

    this.templateRowCounter = function(index){

        var tuples;
        switch (getPageContent(index).template) { //constants for getting rows in templates
            case "basic":
            case "pair1":
                tuples=2;
                break;
            case "sensorName":
                tuples=4;
                break;
            case "make2":
            case "handshake":
                tuples=5;
                break;
            default:
                tuples = 3;
        }
        return tuples; //change to array syntax
    };

}).controller('baseController', function($scope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl ='ready';
});