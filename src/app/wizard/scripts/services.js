'use strict';

angular.module('app').service('SegueService', function() {

    var pageContent = [
        {

        /** -- INTRO -- **/
            "index": 0,
            "part":1,
            "template": "landing",
            "url": "landing",
            "h1": "Welcome to the Making Sense pilot!",
            "h4": "Let’s get you set up with a Smart Citizen kit, and sensing in no time",
            "segueButton": "LET'S DO THIS"
        },{
            "index": 1,
            "part":2,
            "template": "collaborators",
            "url":"making_sense",
            "companyLogo": "app/images/MS LOGO.png",
            "h2": "Making Sense is a project to help people make sense of their environment.",
            "h4": "We want to help you deploy sensors to help understand sound pollution. By making sense of the issue, we might be able to address it.",
            "segueButton": "SOUNDS GOOD!"
        },
        {
            "index": 2,
            "part":3,
            "template": "collaborators",
            "url":"smart_citizen",
            "companyLogo": "app/images/SCK LOGO.png",
            "h2": "Smart Citizen is a movement for civic participation in a modern world",
            "h4": "Smart Citizen creates open tools for citizens to be better informed about the world around them.",
            "segueButton": "CONTINUE"
        },{
            "index": 3,
            "part":4,
            "template": "basic2",
            "url":"smart_citizen_brief",
            "image": "app/images/sck_glow.png",
            "h2": "The Smart Citizen Kit",
            "h4": "This sensor is a Smart Citizen kit for environmental sensing. It measures sound, air quality, humidity, and lots of other things",
            "segueButton": "CONTINUE"
        },{
            "index": 4,
            "part":5,
            "template": "basic2",
            "url":"smart_citizen_brief2",
            "image": "app/images/SCK_macbook.png",
            "h2":"smartcitizen.me",
            "h4": "The sensor sends all the measurements to the Smart Citizen website. It's open and free for all to see, question and play with...",
            "segueButton": "LET'S DO THIS"
        },


    /** -- WHATS IN THE BOX -- **/
        {
            "index": 10,
            "part":1,
            "template": "basic",
            "url":"whats_in_the_box",
            "h1": "LET'S SET UP THE SENSOR",
            "h4": "There's a few pieces we need to set up the kit, let's check we have them all",
            "segueButton": "I'M READY"
        },{
            "index": 11,
            "part":2,
            "template": "selectparts",
            "url":"kit_parts",
            "h2": "Click on all the things you have received",
            "h4": "We need to know this to make the set up work smoothly",

            "part1":"Sensor Board",
            "part1_desc": "This is where all the sensors are. It connects to the bigger, hardware board, so that the sensors can transmit what they find.",
            "part2":"Hardware Board",
            "part2_desc":"This is where all the computation takes place. Anytime you want to connect something to the Smart Citizen, it will be on this board",
            "part3":"Battery",
            "part3_desc":"This powers the device. Every so often it has to be recharged, especially after long periods of continuous use.",
            "part4":"Charging Cable",
            "part4_desc":"When the kit needs to be charged, you can connect this cable to your computer or plug, and back to the kit.",
            "modalButton":"OK, got it",

            "contextButton": "where is my enclosure?",
            "segueButton": "CONTINUE",
            "segueButtonError": "Are you missing parts?"
        },{
            "index": 12,
            "part":3,
            "template": "selectparts2",
            "url":"case",
            "h2": "Finally...",
            "h4": "You don’t have to have the case, but it does protect your kit against the elements",

            "part5":"Case",
            "part5_desc": "The case is water resistant and allows the device to be affixed to a variety of surfaces.",
            "part6":"Spacers",
            "part6_desc":"Placed between the hardware board and sensor board, this keeps the boards study.",
            "part7":"Cover",
            "part7_desc":"Closing the case, this is used dto protect the device from rain. Make sure to place the holes over the sound sensor.",
            "part8":"Fastener",
            "part8_desc":"This is used to fasten the case to the cover.",
            "modalButton":"OK, got it",

            "contextButton": "Where is my mine?",
            "segueButton": "CONTINUE",
            "segueButtonError": "Are you missing parts?"
        },{
            "index": 13,
            "part":4,
            "template": "comfirm",
            "url":"confirm_parts",
            "h1": "WELL DONE",
            "h4": "Now let's put it all together",
            "segueButton": "CONTINUE"
        },{
            "index": 14,
            "part":5,
            "template": "kitbuild1",
            "url":"kitbuild_1",
            "h2": "First the separators...",
            "text": "Place a spacer in the holes on the sensor board",
            "segueButton": "DONE"
        },{
            "index": 15,
            "part":6,
            "template": "kitbuild2",
            "url":"kitbuild_2",
            "h2": "Secondly, let's connect the sensors",
            "text": "Connect the pins on the sensor board to the hardware board",
            "segueButton": "DONE"
        },{
            "index": 16,
            "part":7,
            "template": "kitbuild3",
            "url":"kitbuild_3",
            "h2": "Let's give it some power",
            "text": "Connect the battery to the hardware board",
            "segueButton": "DONE"
        },{
            "index": 17,
            "part":8,
            "template": "kitbuild4",
            "url":"kitbuild_4",
            "h2": "And finally, turn on the sensor",
            "text": "Push the button on the sensor, once.",
            "segueButton": "IT'S ALIVE"
        },{
            "index": 18,
            "part":9,
            "template": "casing",
            "url":"case_1",
            "h2": "Next, we'll place it all in the casing",
            "text": "Make sure you place it with the battery cable towards the bottom of the casing",
            "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosureBattSensor.png",
            "segueButton": "CONTINUE"
        },{
            "index": 19,
            "part":10,
            "template": "casing",
            "url":"case_2",
            "h2": "... and to finish, seal the cover",
            "text": "Place the transparent plastic on the front of the case and fix it in place with the two white plugs.",
            "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosure-wShineclasps.png",
            "segueButton": "CONTINUE"
        },{
            "index": 20,
            "part":11,
            "template": "comfirm",
            "url":"confirm_build",
            "h1": "WELL DONE",
            "h4": "Time to connect it to the internet",
            "segueButton": "CONTINUE"
        },


    /** -- LIGHT HANDSHAKE -- **/
        {
            "index": 21,
            "part":1,
            "template": "wifi_enter",
            "url":"wifi_enter",
            "h2": "What network are we connecting it to?",
            "h4": "We have to type it in manually...",
            "input1":"Name of Wi-Fi",
            "input1_error":"A name is required to connect to a network",
            "input2":"Password",
            "input2_error":"",
            "segueButtonError":"CHECK THE FIELDS",
            "segueButton": "IT'S READY",
            "contextButton": "Try another way",
            "contextButton2": "Ask for Help"
        },{
            "index": 22,
            "part":2,
            "template": "handshake",
            "url": 'handshake',
            "h2": "Now let's do some magic..",
            "h4": "Hold up your kit and press it on the screen over the box below and press 'connect'. Make sure the blue side of the kit is facing you",
            "segueButton": "CONNECT"
        },{
            "index": 23,
            "part":3,
            "template": "wifi_check",
            "url":"wifi_check",
            "h2": "Oops, something went wrong...",
            "h4": "It seems there is a problem. Notice that the sensor light is red, please retry the Wi-Fi name and password",
            "segueButtonError":"CHECK THE FIELDS",
            "contextButton": "Try another way",
            "contextButton2": "Ask for Help"
        },{
            "index": 24,
            "part":4,
            "template": "comfirm",
            "url":"confirm_handshake",
            "h1": "WELL DONE",
            "h4": "You've connected the kit to the internet!",
            "segueButton": "CONTINUE"
        },

    /** -- WIFI HANDSHAKE -- **/
        {
            "index": 30,
            "part":4,
            "template": "basic",
            "url":"accesspoint_pre",
            "h1": "LET'S CONNECT A MOBILE DEVICE TO YOUR SENSOR",
            "h4":"This approach is more reliable. Grab any other mobile device, smartphone or tablet.",
            "segueButton": "GOT IT"
        },{
            "index": 31,
            "part":5,
            "template": "prompted_entry",
            "url":"accesspoint_1",
            "h2": "Awesome, go to your wifi settings and connect to the following wifi:",
            "h4": "If you do not see it, ensure your kit is powered on.",
            "promptedText": "smartCitizenSSID",
            "segueButton": "CONNECTED"
        },{
            "index": 32,
            "part":6,
            "template": "prompted_entry",
            "url":"accesspoint_2",
            "h2": "Next, open your browser and go to:",
            "h4": "If it does not work, make sure you are connected to the wifi",
            "promptedText": "YourSmartCitizenKit.me",
            "segueButton": "CONNECTED"
        },{
            "index": 33,
            "part":6,
            "template": "prompted_entry",
            "url":"accesspoint_3",
            "h2": "Finally, submit your wifi name, its password and when asked for your onboarding code type:",
            "h4": "If the submitted wifi and password are correct you will be redirected shortly, follow the instructions on YourSmartCitizenKit.me",
            "promptedText": "YourSmartCitizenKit.me",
            "segueButton": "CONNECTED"
        },




    /** -- NAMING -- **/
        {
            "index": 40,
            "part":1,
            "template": "basic",
            "url":"sensorName_prep",
            "h1": "LET'S GIVE YOUR SENSOR AN IDENTITY",
            "h4": "This will help us know where this data is coming from...",
            "segueButtonError":"CHECK NAME",
            "segueButton": "CONTINUE"
        },{
            "index": 41,
            "part":2,
            "template": "sensorName",
            "url": 'sensorName',
            "h2": "What shall we name the sensor?",
            "h4": "You can name it pretty much anything. This is how it will appear on the Smart Citizen map.",
            "input1":"Enter the sensor name",
            "input1_error":"The sensor needs a name",
            "contextButton": "Choose a random name",
            "segueButtonError":"CHECK NAME",
            "segueButton": "DONE"
        },




    /** -- LOCATION -- **/
        {
            "index": 50,
            "part":1,
            "template": "location_prep",
            "url": 'location_prep',
            "h2": "Where will you install the sensor?",
            "h4": "By pressing 'allow' on the pop up we can determine the current location of the sensor. You can manually adjust this later to anywhere you want to place the sensor.",
            "segueButton": "DONE"
        },{
            "index": 51,
            "part":2,
            "template": "location_map",
            "url": 'location_map',
            "h2": "If you want to adjust it or pin it elsewhere, you can do that here",
            "h4": "Remember wherever your device goes, it will need wi-fi. Otherwise you'll have to go get it every now and again and connect it to your computer to sync the data",
            "input1":"Enter an address",
            "input1_error":"",
            "segueButton": "ALL SET"
        },
        /*  We currently skip tags    
        {
            "index": 52,
            "template": "location_tags",
            url: 'location_tags',
            "h2": "Selecciona el que mejor se ajusta al hogar de tu sensor",
            "h4": "Esto nos ayudará a entender mejor los datos que estás midiendo",
            "segueButton": "TODO CONFIGURADO"
        },
        */
        {
            "index": 52,
            "part":3,
            "template": "comfirm",
            "url":"confirm_location",
            "h1": "ALMOST THERE",
            "h4": "Finally, let's save all this work we've done.",
            "segueButton": "CONTINUE"
        },




    /** -- ACCOUNT HERE -- **/
        {
            "index": 90,
            "part":1,
            "template": "account1",
            "url": 'email',
            "h2": "We can save the sensor with your email address",
            "h4": "If you already have an account, we'll add it to that. If not, we'll quickly make a new one",
            "segueButtonError":"CHECK EMAIL",
            "segueButton": "CONTINUE"
        },{
            "index": 91,
            "part":2,
            "template": "login",
            "url": 'login',
            "h2a": "Awesome, welcome back",
            "h2b":"enter your password below to finish!",
            "h4": "This will push all of your new sensor's data to your account",
            "input1":"Password",
            "input1_error":"",
            "segueButtonError":"CHECK PASSWORD",
            "segueButton": "CONTINUE"
        },{
            "index": 95,
            "part":2,
            "template": "make1",
            "url": 'username',
            "h2": "Nice, so you're new to Smart Citizen?",
            "h4": "Add a username to your profile, so users know who owns the sensor.",
            "input1":"Enter a username",
            "input1_error":"A username is required",
            "contextButton": "Chose random name",
            "segueButtonError":"CHECK USERNAME",
            "segueButton": "CONTINUE"
        },{
            "index": 96,
            "part":3,
            "template": "make2",
            "url": 'password',
            "h2": "Now, filly a password to secure everything",
            "h4a": "the password has to be at least 8 characters long",
            "h4b":"And one more time to make sure there are no mistakes",
            "input1":"Password",
            "input1_error":"The password must be at least 5 characters long",
            "input1_error2":"You must enter a password",
            "segueButtonError":"PASSWORDS MUST MATCH",
            "segueButton": "ALL DONE!"
        },{
            "index": 100,
            "part":4,
            "template": "final",
            "url": 'final',
            "h1":"ITS ALIVE!",
            "h2": "You have successfully installed and connected the Smart Citizen kit to the internet, and then added the kit to the global community of sensors",
            "h4": "Visit SmartCitizen.me to see your sensor in action capturing data. Don't forget to read the manual for assembly instructions and good tips on placing your sensor in the wild",
            "segueButton": "VISIT SMARTCITIZEN.ME"
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

    this.nextPage = function(val, accountPresent){
        console.log(val);
        if (val == 4) {
            return('whats_in_the_box');
        } else if (val == 23) {
            return ('handshake');
        } else if (val == 24) {
            return ('sensorName_prep');
        } else if (val == 41) {
            return ('location_prep');
        } else if (val == 52) { // Before 53. We currently skip tags
            return ('email');
        } else if (val == 90) {
            if (accountPresent) {
                return('login');
            } else {
                return('username');
            }
        } else if(val == 91) {
            return ('final');
        } else if (val == 96) {
            return ('final');
        }
        else {
            return getPageContent(val + 1).url;
        }
    };
    this.previousPage = function(val,accountPresent){
        if (val == 10) {
            return('smart_citizen_brief2')
        } else if (val == 30){
            return ('wifi_check');
        } else if (val == 40) {
            return ('confirm_handshake');
        } else if (val == 50) {
            return ('sensorName');
        } else if (val == 90) {
            return('confirm_location');
        } else if (val==95) {
            return ('email');
        } else if (val == 100){
            if (accountPresent) {
                return('login');
            } else {
                return('password');
            }
        }
        else
        {
            return getPageContent(val - 1).url;
        }
    };

    function payloadGenerate(content){
        var payload = content;
        console.log(payload);

        var index = pageContent.findIndex(function(item, i){
            return item.index === payload.index;
        });

        payload.progressLeftLabel = setupProgressLeft(payload.index).toString() + " / 6";
        payload.progressRightLabel = setupProgressRight(payload.index).toString() + " step #" + payload.part;
        payload.progressVal = (index / pageContent.length) * 100;


        payload.companyLogo = content.companyLogo;
        payload.image = content.image;


        if ( (content.index >= 1) && (content.index < 100) ) {
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
            case "final":
            case "make1":
            case "make2":
            case "wifi_check":
                tuples=4;
                break;
            default:
                tuples = 3;
        }
        return tuples; //change to array syntax
    };

    function setupProgressLeft(index){
        if ( index <= 4 ){
            return 1;
        } else if ( index <= 20 ){
            return 2;
        } else if ( index <= 33 ){
            return 3;
        } else if (index <= 41){
            return 4;
        } else if (index <= 52){
            return 5;
        } else {
            return 6;
        }
    }
    function setupProgressRight(index){
        if ( index <= 4 ){
            return "Introduction";
        } else if ( index <= 20 ){
            return "What's in the Box";
        } else if ( index <= 33 ){
            return "Handshake";
        } else if (index <= 41){
            return "Naming";
        } else if (index <= 52){
            return "Location";
        } else {
            return "Account";
        }
    }

}).controller('baseController', function($scope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl ='ready';
    $scope.$parent.smartCitizenToggle = '';
});