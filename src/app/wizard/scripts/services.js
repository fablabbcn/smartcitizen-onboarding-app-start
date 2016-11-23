'use strict';

angular.module('app').service('SegueService', function() {

    var pageContent = [
        {

        /** -- INTRO -- **/
            "index": 0,
            "template": "landing",
            "url": "landing",
            "h1": "Bienvenidos al piloto de Making Sense!",
            "h4": "Vamos a configurar el Kit de Smart Citizen, y comenzar a medir en breve",
            "segueButton": "VAMOS"
        },{
            "index": 1,
            "template": "collaborators",
            "url":"making_sense",
            "companyLogo": "app/images/MS LOGO.png",
            "h2": "Making Sense es un proyecto que ayuda a las personas a ser conscientes de su ambiente.",
            "h4": "Queremos ayudarte a implementar sensores para entender la contaminación acústica. Tomando conciencia del problema, seremos capaces de abordarlo.",
            "segueButton": "SUENA BIEN!"
        },
        {
            "index": 2,
            "template": "collaborators",
            "url":"smart_citizen",
            "companyLogo": "app/images/SCK LOGO.png",
            "h2": "Smart Citizen es un movimiento para la participación ciudadana en un mundo moderno",
            "h4": "Smart Citizen crea herramientas abiertas para que ciudadanos estén mejor informados del mundo a su alrededor.",
            "segueButton": "CONTINÚA"
        },{
            "index": 3,
            "template": "basic2",
            "url":"smart_citizen_brief",
            "image": "app/images/sck_glow.png",
            "h2": "El Kit de Smart Citizen",
            "h4": "Este sensor es el Kit de Smart Citizen para medir el medioambiente. Mide sonido, calidad del aire, humedad y muchas cosas más",
            "segueButton": "CONTINÚA"
        },{
            "index": 4,
            "template": "basic2",
            "url":"smart_citizen_brief2",
            "image": "app/images/SCK_macbook.png",
            "h2":"smartcitizen.me",
            "h4": "El sensor envía todos los resultados a la web de Smart Citizen. Es abierta y gratuita para todos, para ver, preguntar y jugar con ella...",
            "segueButton": "VAMOS"
        },


    /** -- WHATS IN THE BOX -- **/
        {
            "index": 10,
            "template": "basic",
            "url":"whats_in_the_box",
            "h1": "CONFIGUREMOS EL SENSOR",
            "h4": "Hay algunas piezas que debemos configurar en el Kit, revisemos que las tenemos todas",
            "segueButton": "ESTOY LIST@"
        },{
            "index": 11,
            "template": "selectparts",
            "url":"kit_parts",
            "h2": "Marca todas las cosas que recibisteis",
            "h4": "Debemos saber esto para que la configuración funcione sin problemas",
            "contextButton": "Dónde esta mi carcasa?",
            "segueButton": "CONTINÚA",
            "segueButtonError": "Te faltan piezas?"
        },{
            "index": 12,
            "template": "selectparts2",
            "url":"case",
            "h2": "Finalmente...",
            "h4": "No necesitas la carcasa pero ayudará a proteger tu kit en el exterior",
            "contextButton": "Dónde está la mia?",
            "segueButton": "CONTINÚA",
            "segueButtonError": "Te faltan piezas?"
        },{
            "index": 13,
            "template": "comfirm",
            "url":"confirm_parts",
            "h1": "BIEN HECHO",
            "h4": "Ahora vamos a poner todo junto",
            "segueButton": "CONTINÚA"
        },{
            "index": 14,
            "template": "kitbuild1",
            "url":"kitbuild_1",
            "h2": "Primero, conectamos los sensores",
            "text": "Connect the pins on the [] to the [].",
            "segueButton": "HECHO"
        },{
            "index": 15,
            "template": "kitbuild2",
            "url":"kitbuild_2",
            "h2": "Vamos a darle algo de poder",
            "text": "Connect [] to the [].",
            "segueButton": "HECHO"
        },{
            "index": 16,
            "template": "kitbuild3",
            "url":"kitbuild_3",
            "h2": "Enciende el sensor",
            "text": "Presiona el botón en el sensor, una vez",
            "segueButton": "ESTA VIVO"
        },{
            "index": 17,
            "template": "casing",
            "url":"case_1",
            "h2": "Next, we place it all in the casing",
            "text": "Make sure you place it with the battery cable towards the bottom of the casing",
            "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosureBattSensor.png",
            "segueButton": "ESTA VIVO"
        },{
            "index": 18,
            "template": "casing",
            "url":"case_2",
            "h2": "... and to finish seal the cover",
            "text": "Place the transparent plastic on the front of the case and fix it in place with the two white plugs.",
            "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosure-wShineclasps.png",
            "segueButton": "ESTA VIVO"
        },{
            "index": 19,
            "template": "comfirm",
            "url":"confirm_build",
            "h1": "BIEN HECHO",
            "h4": "Hora de conectarse a internet",
            "segueButton": "CONTINÚA"
        },


    /** -- LIGHT HANDSHAKE -- **/
        {
            "index": 20,
            "template": "wifi_enter",
            "url":"wifi_enter",
            "h2": "Con que red Wi-Fi vas a utilizar tu kit?",
            "h4": "Debemos introducirla manualmente... Recuerda que mayúsculas y minúsculas son importantes.",
            "segueButtonError":"VERIFICAR CAMPOS",
            "segueButton": "ESTOY LIST@"
        },{
            "index": 21,
            "template": "handshake",
            "url": 'handshake',
            "h2": "Ahora vamos a hacer algo de magia...",
            "h4": "Espera a que la luz de tu Kit esté roja, sostén tu Kit y presiona en la pantalla debajo de la carcasa y presiona “conectar”. Asegurate de que el lado azul del Kit esta hacia ti.",
            "segueButton": "CONECTAR"
        },{
            "index": 22,
            "template": "wifi_check",
            "url":"wifi_check",
            "h2": "Oups! Alguna cosa no funciono...",
            "h4": "Parece que hubo algun problema. Fijate que la luz de tu kit esté en rojo y repasa que la información de tu red Wi-Fi sea correcta.",
            "segueButton": "VERIFICAR CONTRASEÑA"
        },{
            "index": 23,
            "template": "comfirm",
            "url":"confirm_handshake",
            "h1": "BIEN HECHO",
            "h4": "Ya tienes tu Kit conectado a internet",
            "segueButton": "CONTINÚA"
        },

    /** -- WIFI HANDSHAKE -- **/
        {
            "index": 30,
            "template": "pair1",
            "url":"pair_1",
            "h2": "Encuentra tu red de Wifi en la lista siguiente",
            "segueButton": "HECHO"
        },{
            "index": 31,
            "template": "pair2",
            "url":"pair_2",
            "h2": "Casi list@. Cual es la contraseña para la red?",
            "h4": "Necesitamos esto para configurar la conexión de tu dispositivo a internet",
            "segueButton": "VERIFICAR CONTRASEÑA"
        },{
            "index": 33,
            "template": "basic2",
            "url": 'wifi_success',
            "image": "app/images/sck_iso-1295.jpg",
            "h1": "Genial! Tenemos el sensor en línea",
            "h4": "Ahora solo ve a tu menú del Wifi y conéctelo de nuevo a su red para continuar la configuración.",
            "segueButton": "ESTA VIVO"
        },




    /** -- NAMING -- **/
        {
            "index": 40,
            "template": "basic",
            "url":"sensorName_prep",
            "h1": "VAMOS A DARLE UNA IDENTIDAD A TU SENSOR",
            "h4": "Esto nos ayudará a saber de dónde vienen los datos...",
            "segueButtonError":"VERIFICAR NOMBRE",
            "segueButton": "CONTINÚA"
        },{
            "index": 41,
            "template": "sensorName",
            "url": 'sensorName',
            "h1": "Vamos a darle un nombre a tu sensor",
            "h4": "Esto es para que podamos referirnos a él después",
            "contextButton": "Elige cualquier nombre",
            "segueButtonError":"VERIFICAR NOMBRE",
            "segueButton": "HECHO"
        },




    /** -- LOCATION -- **/
        {
            "index": 50,
            "template": "location_prep",
            "url": 'location_prep',
            "h2": "Donde instalarás tu sensor?",
            "h4": "PBy presionando 'allow' en el pop up podemos determinar la ubicación actual del sensor. Después se puede ajustar manualmente a cualquier lugar en que quieras ubicar el sensor.",
            "segueButton": "HECHO"
        },{
            "index": 51,
            "template": "location_map",
            "url": 'location_map',
            "h2": "Si deseas ajustarlo a otro lugar, puedes hacerlo aquí",
            "h4": "Recuerda que donde vaya tu dispositivo, necesitará Wifi. De lo contrario, tendrás que conectarlo de vez en cuando a tu ordenador para sincronizar los datos",
            "segueButton": "HECHO"
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
            "template": "comfirm",
            "url":"confirm_location",
            "h1": "Casi list@s",
            "h4": "Finalmente, guardemos todo el trabajo que hemos hecho.",
            "segueButton": "CONTINÚA"
        },




    /** -- ACCOUNT HERE -- **/
        {
            "index": 90,
            "template": "account1",
            "url": 'email',
            "h2": "Podemos guardar el sensor con vuestra dirección de correo electrónico",
            "h4": "Si ya teneis una cuenta, lo agregamos a esta. Si no la teneis, rapidamente os registrais",
            "segueButtonError":"VERIFICAR EMAIL",
            "segueButton": "CONTINÚA"
        },{
            "index": 91,
            "template": "login",
            "url": 'login',
            "h2a": "Excelente, bienvenido!",
            "h2b":"Ingresa tu contraseña abajo para terminar!",
            "h4": "Esto llevará todos los datos del sensor a vuestra cuenta",
            "segueButtonError":"VERIFICAR CONTRASEÑA",


            "segueButton": "CONTINÚA"
        },{
            "index": 95,
            "template": "make1",
            "url": 'username',
            "h2": "Guay, eres nuevo en Smart Citizen?",
            "h4": "Agrega un nombre de usuario a tu perfil, así los usuarios sabrán quien es el dueño del sensor.",
            "contextButton": "Elige un nombre de usuario",
            "segueButtonError":"VERIFICAR NOMBRE DE USUARIO",
            "segueButton": "CONTINÚA"
        },{
            "index": 96,
            "template": "make2",
            "url": 'password',
            "h2": "Ahora, escribe una contraseña para asegurar todo",
            "h4a": "La contraseña debe tener al menos 8 caracteres de largo",
            "h4b":"Y una vez más para asegurarnos de que no hay errores",
            "segueButtonError":"LAS CONTRASEÑAS DEBEN COINCIDIR!",
            "segueButton": "TODO LISTO!"
        },{
            "index": 100,
            "template": "final",
            "url": 'final',
            "h1":"ESTA VIVO!",
            "h2": "Has instalado y conectado satisfactoriamente tu Kit Smart Citizen a internet, y a continuación agrega el Kit a la comunidad global de sensores",
            "h4": "Visita SmartCitizen.me para ver tu sensor en acción, capturando datos. No olvides leer el manual para las instrucciones de ensamblaje y consejos para instalar tu sensor en exteriores",
            "segueButton": "VISITA SMARTCITIZEN.ME"
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
        if (val == 4) {
            return('whats_in_the_box');
        } else if (val == 19) {
            return ('wifi_enter');
        } else if (val == 22) {
            return ('handshake');
        } else if (val == 23) {
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
        } else if (val == 20){
            return('confirm_build')
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
                tuples=4;
                break;
            case "wifi_enter":
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
    $scope.$parent.smartCitizenToggle = '';
});