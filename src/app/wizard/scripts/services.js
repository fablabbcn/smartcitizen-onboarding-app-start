'use strict';

angular.module('app').service('SegueService', function() {
    console.log('serviceRunning');

    var pageContent = [
        {
            "index": 0,
            "template": "landing",
            "url": "landing",
            "h1": "You've made it to the Making Sense pilot!",
            "h4": "Let’s get you set up with a Smart Citizen kit, and sensing in no time",
            "currentState": "Welcome",
            "segueButton": "Woop!"
        },{
            "index": 1,
            "template": "currentdevice",
            "url": "device",
            "h1": "What device are you using to set up the sensor?",
            "h4": "We need to know this to optimise the setup",
            "currentState": "Welcome",
            "segueButton": "Continue!",
            "warning":"You need to be on a wireless connection to proceed"
        },{
            "index": 2,
            "template": "collaborators",
            "url":"us",
            "companyLogo": "20160301 MAKING SENSE LOGOS-07.png",
            "h1": "Making Sense is a project to help people make sense of their environment.",
            "h4": "We want to help you deploy sensors to help understand sound pollution. By making sense of the issue, we might be able to address it.",
            "currentState": "What is Making Sense",
            "segueButton": "SOUNDS GOOD!"
        },
        {
            "index": 3,
            "template": "collaborators",
            "url":"smart_citizen",
            "companyLogo": "smart_citizen.png",
            "h1": "Smart Citizen is a movement for civic participation in a modern world",
            "h4": "Smart Citizen creates open tools for citizens to be better informed about the world around them.",
            "currentState": "What is Smart Citizen",
            "segueButton": "CONTINUE"
        },{
            "index": 4,
            "template": "basic2",
            "url":"smart_citizen_brief",
            "image": "sck_iso-1295.jpg",
            "h4": "This sensor is a Smart Citizen kit for environmental sensing. It measures sound, air quality, humidity, and lots of other things",
            "currentState": "What is Smart Citizen",
            "segueButton": "LET’S SET UP MY SENSOR"
        },
        {
            "index": 5,
            "template": "basic",
            "url":"whats_in_the_box",
            "currentState": "WHAT’S IN THE BOX",
            "h1": "First of all, let’s make sure we have everything we need.",
            "h4": "We need a few things to set up the sensor. Let’s see if you’ve recieved them",
            "segueButton": "LETS DO IT"
        },{
            "index": 6,
            "template": "selectparts",
            "url":"kit_parts",
            "currentState": "WHAT’S IN THE BOX",
            "h2": "Click on all the things you have received",
            "contextButton": "where is my enclosure?",
            "segueButton": "Done"
        },
        {
            "index": 7,
            "template": "kitbuild1",
            "url":"kitbuild_1",
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
            "url":"kitbuild_2",
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
            "url":"kitbuild_3",
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
            "url":"wifi_prep",
            "image": "sck_iso-1295.jpg",
            "h1": "To set up the sensor let's find it on the WiFi menu",
            "h4": "Click the 'Smart Citizen Kit' from the dropdown",
            "currentState": "pair the sensor",
            "segueButton": "its alive"
        },{
            "index": 11,
            "template": "pair1",
            "url":"pair_1",
            "h1": "Find your WiFi network from the list below",
            "currentState": "pair the sensor",
            "segueButton": "Done"
        },{
            "index": 12,
            "template": "pair2",
            "url":"pair_2",
            "h1": "Almost there. What is the Password for the network?",
            "h4": "We need this to set up your device’s connection to the internet",
            "currentState": "pair the sensor",
            "segueButton": "Check Password"
        },{
            "index": 13,
            "template": "basic2",
            "url": 'wifi_success',
            "image": "sck_iso-1295.jpg",
            "h1": "Success! We've got the sensor online",
            "h4": "Now just go to your wi-fi menu and connect back to your wi-fi network to continue the setup.",
            "currentState": "pair the sensor",
            "segueButton": "its alive"
        },{
            "index": 14,
            "template": "sensorName",
            url: 'sensorName',
            "h1": "Lets give your sensor a name",
            "h4": "This is so we can refer to it later",
            "currentState": "your sensor",
            "contextButton": "generate a random name",
            "segueButton": "done"
        },{
            "index": 15,
            "template": "location1",
            url: 'location1',
            "h1": "Well need to know your location to add it to the global Smart Citizen map",
            "h4": "Press ‘Allow’ on the pop up to automatically let us know where to pin the sensor",
            "h6":"You can click 'Block' on the popup and set your location manually on the next step",
            "currentState": "location",
            "segueButton": "done"
        },{
            "index": 16,
            "template": "location2",
            url: 'location2',
            "h1": "Select which best fits your sensor's home",
            "h4": "This will help us better understand the data you are sensing",
            "currentState": "location",
            "segueButton": "done"
        },{
            "index": 17,
            "template": "location3",
            url: 'location3',
            "h1": "Awesome now lets pinpoint your kit's location",
            "h4": "Drag and drop the pin to your sensors current location",
            "currentState": "location",
            "segueButton": "done"
        }];

    this.prep = function(val){
        return payloadGenerate(pageContent[val]);
    };

    this.nextPage = function(val){
        console.log('currently on ' + val);
        return pageContent[val + 1].url;
    };

    function payloadGenerate(content){
        console.log(content);
        var payload = content;
        payload.progressVal = ((content.index + 1) / pageContent.length) * 100;
        payload.companyLogo = "app/images/" + content.companyLogo;
        payload.image = "app/images/" + content.image;


        return payload;
    }
}).controller('baseController', function($scope, scopePayload){
    $scope.$parent.payload = scopePayload;
});