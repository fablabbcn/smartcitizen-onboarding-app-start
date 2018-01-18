'use strict';

angular.module('app').service('SegueService', function () {

    var pageContent = [
        [
            {

            /** -- INTRO -- **/
            "index": 0,
            "part": 1,
            "template": "landing",
            "url": "landing",
            "h1": "Welcome to the Making Sense pilot!",
            "h4": "Let’s get you set up with a Smart Citizen kit, and sensing in no time",
            "segueButton": "Continue in English",
            "contextButton1": "CASTELLANO",
            "contextButton2": "CATALÀ",
        },
            {
                "index": 1,
                "part": 2,
                "template": "collaborators",
                "url": "making_sense",
                "companyLogo": "app/images/MS LOGO.png",
                "h2": "Making Sense is a project to help people make sense of their environment.",
                "h4": "We want to help you deploy sensors to help understand sound pollution. By making sense of the issue, we might be able to address it.",
                "segueButton": "SOUNDS GOOD!"
            },
            {
                "index": 2,
                "part": 3,
                "template": "collaborators",
                "url": "smart_citizen",
                "companyLogo": "app/images/SCK LOGO.png",
                "h2": "Smart Citizen is a movement for civic participation in a modern world",
                "h4": "Smart Citizen creates open tools for citizens to be better informed about the world around them.",
                "segueButton": "CONTINUE"
            },
            {
                "index": 3,
                "part": 4,
                "template": "basic2",
                "url": "smart_citizen_brief",
                "image": "app/images/sck_glow.png",
                "h2": "The Smart Citizen Kit",
                "h4": "This sensor is a Smart Citizen Kit for environmental sensing. It measures sound, air quality, humidity, and lots of other things",
                "segueButton": "CONTINUE"
            },
            {
                "index": 4,
                "part": 5,
                "template": "basic2",
                "url": "smart_citizen_brief2",
                "image": "app/images/SCK_macbook.png",
                "h2": "smartcitizen.me",
                "h4": "The kit sends all the measurements to the Smart Citizen website. It's open and free for all to see, question and play with...",
                "segueButton": "LET'S DO THIS"
            },


            /** -- WHATS IN THE BOX -- **/
            {
                "index": 10,
                "part": 1,
                "template": "basic",
                "url": "whats_in_the_box",
                "h1": "LET'S SET UP THE KIT",
                "h4": "There's a few pieces we need to set up the Kit, let's check we have them all",
                "segueButton": "I'M READY"
            },
            {
                "index": 11,
                "part": 2,
                "template": "selectparts",
                "url": "kit_parts",
                "h2": "Click on all the things you have received",
                "h4": "We need to know this to make the set up work smoothly",

                "part1": "Sensor Board",
                "part1_desc": "This is where all the sensors are. It connects to the bigger, hardware board, so that the sensors can transmit what they find.",
                "part2": "Hardware Board",
                "part2_desc": "This is where all the computation takes place. Anytime you want to connect something to the Smart Citizen, it will be on this board",
                "part3": "Battery",
                "part3_desc": "This powers the device. Every so often it has to be recharged, especially after long periods of continuous use.",
                "part4": "Charging Cable",
                "part4_desc": "When the Kit needs to be charged, you can connect this cable to your computer or plug, and back to the Kit.",
                "modalButton": "OK, got it",

                "contextButton": "where is my enclosure?",
                "segueButton": "CONTINUE",
                "segueButtonError": "Are you missing parts?",
                "continueButton": "CONTINUE",
                "yesButton": "YES",
                "noButton": "NO"
            },
            {
                "index": 12,
                "part": 3,
                "template": "selectparts2",
                "url": "case",
                "h2": "Finally...",
                "h4": "You don’t have to have the case, but it does protect your kit against the elements",

                "part5": "Case",
                "part5_desc": "The case is water resistant and allows the device to be affixed to a variety of surfaces.",
                "part6": "Spacers",
                "part6_desc": "Placed between the hardware board and sensor board, this keeps the boards study.",
                "part7": "Cover",
                "part7_desc": "Closing the case, this is used dto protect the device from rain. Make sure to place the holes over the sound sensor.",
                "part8": "Fastener",
                "part8_desc": "This is used to fasten the case to the cover.",
                "modalButton": "OK, got it",

                "contextButton": "Where is my mine?",
                "segueButton": "CONTINUE",
                "segueButtonError": "Are you missing parts?",
                "continueButton": "CONTINUE",
                "yesButton": "YES",
                "noButton": "NO"
            },
            {
                "index": 13,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_parts",
                "h1": "WELL DONE",
                "h4": "Now let's put it all together",
                "segueButton": "CONTINUE"
            },
            {
                "index": 14,
                "part": 5,
                "template": "kitbuild1",
                "url": "kitbuild_1",
                "h2": "First the separators...",
                "text": "Place a spacer in the holes on the sensor board",
                "segueButton": "DONE"
            },
            {
                "index": 15,
                "part": 6,
                "template": "kitbuild2",
                "url": "kitbuild_2",
                "h2": "Secondly, let's connect the sensors",
                "text": "Connect the pins on the sensor board to the hardware board",
                "segueButton": "DONE"
            },
            {
                "index": 16,
                "part": 7,
                "template": "kitbuild3",
                "url": "kitbuild_3",
                "h2": "Let's give it some power",
                "text": "Connect the battery to the hardware board",
                "segueButton": "DONE"
            },
            {
                "index": 17,
                "part": 8,
                "template": "kitbuild4",
                "url": "kitbuild_4",
                "h2": "And finally, turn on the Kit",
                "text": "Push the button on the Kit multiple times, until the LED is red.",
                "segueButton": "IT'S ALIVE"
            },
            {
                "index": 18,
                "part": 9,
                "template": "casing",
                "url": "case_1",
                "h2": "Next, we'll place it all in the casing",
                "text": "Make sure you place it with the battery cable towards the bottom of the casing",
                "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosureBattSensor.png",
                "segueButton": "CONTINUE"
            },
            // {
            //     "index": 19,
            //     "part": 10,
            //     "template": "casing",
            //     "url": "case_2",
            //     "h2": "... and to finish, seal the cover",
            //     "text": "Place the transparent plastic on the front of the case and fix it in place with the two white plugs.",
            //     "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosure-wShineclasps.png",
            //     "segueButton": "CONTINUE"
            // },
            {
                "index": 19,
                "part": 11,
                "template": "comfirm",
                "url": "confirm_build",
                "h1": "WELL DONE",
                "h4": "Time to connect it to the internet",
                "segueButton": "CONTINUE"
            },


            /** -- LIGHT HANDSHAKE -- **/
            {
                "index": 21,
                "part": 1,
                "template": "wifi_enter",
                "url": "wifi_enter",
                "h2": "What network are we connecting it to?",
                "h4": "We have to type it in manually...",
                "input1": "Name of Wi-Fi",
                "input1_error": "A name is required to connect to a network",
                "input2": "Password",
                "input2_error": "",
                "segueButtonError": "CHECK THE FIELDS",
                "segueButton": "IT'S READY",
                "contextButton": "Try another way",
                "contextButton2": "Ask for Help",
                "continueButton": "CONTINUE"
            },
            {
                "index": 22,
                "part": 2,
                "template": "handshake",
                "url": "handshake",
                "h2": "Now let's do some magic..",
                "h4": "Hold up your kit and press it on the screen over the box below and press 'connect'. Make sure the blue side of the kit is facing you",
                "handshakeLabel": "Place your kit here",
                "waitLabel": "YOU CAN REMOVE YOUR DEVICE",
                "segueButton": "CONNECT",
                "continueButton": "CONTINUE"
            },
            {
                "index": 23,
                "part": 3,
                "template": "wifi_check",
                "url": "wifi_check",
                "h2": "Oops, something went wrong...",
                "h4": "It seems there is a problem. Notice that the Kit light is red, please retry the Wi-Fi name and password",
                "segueButtonError": "CHECK THE FIELDS",
                "contextButton": "Try another way",
                "contextButton2": "Ask for Help",
                "waitLabel": "WAIT",
                "segueButton": "CONNECT",
                "continueButton": "CONTINUE"
            },
            {
                "index": 24,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_handshake",
                "h1": "WELL DONE",
                "h4": "You've connected the kit to the internet!",
                "segueButton": "CONTINUE"
            },

            /** -- WIFI HANDSHAKE -- **/
            {
                "index": 30,
                "part": 4,
                "template": "basic",
                "url": "accesspoint_pre",
                "h1": "LET'S TRY WITH A PHONE OR TABLET INSTEAD",
                "h4": "This approach is more reliable. You will need a phone or tablet.",
                "segueButton": "GOT IT"
            },
            {
                "index": 31,
                "part": 5,
                "template": "prompted_entry",
                "url": "accesspoint_1",
                "h2": "On your mobile device, go to your Wi-Fi settings and connect to the Wi-Fi called:",
                "h3_1": "The",
                "em_1": " number",
                "h3_2": " of the Kit, located in the",
                "em_2": " bottom right corner",
                "h3_3": " of your Kit.",
                "h4": "If you do not see it, make sure your kit is powered on with a red LED.",
                "promptedText": "SmartCitizen[...]",
                "segueButton": "CONNECTED"
            },
            {
                "index": 32,
                "part": 6,
                "template": "prompted_entry",
                "url": "accesspoint_2",
                "h2": "You should see this window on your mobile device",
                "h3_1": "If that did not happen, open the browser on your device and go to",
                "em_1": " www.MySCK.me",
                "h4": "If it does not work, make sure you are connected to the wifi",
                "promptedText": "SCKit.me",
                "segueButton": "CONNECTED"
            },
            {
                "index": 33,
                "part": 6,
                "template": "prompted_entry",
                "url": "ap_final",
                "h2": "Select your Wi-Fi from the list, and enter the password. When asked for your onboarding code submit:",
                "h4": "If the submitted wifi and password are correct you will be redirected shortly, follow the instructions on www.MySCK.me",
                "promptedText": "TOKEN HERE",
                "segueButton": "DONE"
            },


            /** -- NAMING -- **/
            {
                "index": 40,
                "part": 1,
                "template": "basic",
                "url": "sensorName_prep",
                "h1": "LET'S GIVE YOUR SENSOR AN IDENTITY",
                "h4": "This will help us know where this data is coming from...",
                "segueButtonError": "CHECK NAME",
                "segueButton": "CONTINUE"
            },
            {
                "index": 41,
                "part": 2,
                "template": "sensorName",
                "url": "sensorName",
                "h2": "What shall we name the sensor?",
                "h4": "You can name it pretty much anything. This is how it will appear on the Smart Citizen map.",
                "input1": "Enter the sensor name",
                "input1_error": "The sensor needs a name",
                "contextButton": "Choose a random name",
                "segueButtonError": "CHECK NAME",
                "segueButton": "DONE"
            },


            /** -- LOCATION -- **/
            {
                "index": 50,
                "part": 1,
                "template": "location_prep",
                "url": "location_prep",
                "h2": "Where will you install the sensor?",
                "h4": "By pressing 'allow' on the pop up we can determine the current location of the sensor. You can manually adjust this later to anywhere you want to place the sensor.",
                "segueButton": "DONE",
                "continueButton": "DONE!",
                "waitButton": "WAIT"
            },
            {
                "index": 51,
                "part": 2,
                "template": "location_map",
                "url": "location_map",
                "h2": "If you want to adjust it or pin it elsewhere, you can do that here",
                "h4": "Remember wherever your device goes, it will need wi-fi. Otherwise you'll have to go get it every now and again and connect it to your computer to sync the data",
                "input1": "Enter an address",
                "input1_error": "",
                "segueButton": "ALL SET",
                "continueButton": "ALL SET"
            },
            {
                "index": 52,
                "part": 3,
                "template": "location_tags",
                "url": "location_tags",
                "h2": "Is there anything we should know about location?",
                "h4": "Selecting from the tags below can help us make sense of the data, and compare it more accurately",
                "segueButton": "All SET",
                "continueButton": "All SET",
                "tags": ["Inside",
                    "Outside",
                    "Ground Floor",
                    "First Floor",
                    "Second Floor",
                    "Third Floor",
                    "Fourth Floor",
                    "Fifth Floor",
                    "Terrace",
                    "Garden",
                    "Balcony",
                    "Window",
                    "Residential",
                    "Commercial",
                    "Kitchen",
                    "Bedroom",
                    "Living Room",
                    "Bathroom"
                ]
            },
            {
                "index": 53,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_location",
                "h1": "ALMOST THERE",
                "h4": "Finally, let's save all this work we've done.",
                "segueButton": "CONTINUE"
            },


            /** -- ACCOUNT HERE -- **/
            {
                "index": 90,
                "part": 1,
                "template": "account1",
                "url": "email",
                "h2": "We can save the Kit with your email address",
                "h4": "If you already have an account, we'll add it to that. If not, we'll quickly make a new one",
                "segueButton": "CONTINUE",
                "input1": "Put your email below",
                "input1_error": "You must enter an email",
                "segueButtonError": "CHECK EMAIL",
                "continueButton": "CONTINUE"
            },
            {
                "index": 91,
                "part": 2,
                "template": "login",
                "url": "login",
                "h2a": "Awesome, welcome back",
                "h2b": "enter your password below to finish!",
                "h4": "This will push all of your new Kit's data to your account",
                "input1": "Password",
                "input1_error": "",
                "segueButtonError": "CHECK PASSWORD",
                "segueButton": "CONTINUE",
                "contextButton": "FORGOT PASSWORD"
            },
            {
                "index": 95,
                "part": 2,
                "template": "make1",
                "url": "username",
                "h2": "Nice, so you're new to Smart Citizen?",
                "h4": "Add a username to your profile, so users know who owns the sensor.",
                "input1": "Enter a username",
                "input1_error": "A username is required",
                "contextButton": "Chose random name",
                "segueButtonError": "CHECK USERNAME",
                "segueButton": "CONTINUE"
            },
            {

                "index": 96,
                "part": 3,
                "template": "make2",
                "url": "password",
                "h2": "Now, filly a password to secure everything",
                "h4a": "the password has to be at least 8 characters long",
                "h4b": "And one more time to make sure there are no mistakes",
                "input1": "Password",
                "input1_error": "The password must be at least 5 characters long",
                "input1_error2": "You must enter a password",
                "segueButtonError": "PASSWORDS MUST MATCH",
                "segueButton": "ALL DONE!",
                "continueButton": "ALL DONE!"
            },
            {
                "index": 100,
                "part": 4,
                "template": "final",
                "url": "final",
                "h1": "ITS ALIVE!",
                "h2": "You have successfully installed and connected the Smart Citizen Kit to the internet, and then added the kit to the global community of sensors",
                "h4": "Visit SmartCitizen.me to see your Kit in action capturing data. Don't forget to read the manual for assembly instructions and good tips on placing your sensor in the wild",
                "segueButton": "VISIT SMARTCITIZEN.ME"
            }
        ],
        [
            {

            /** -- INTRO -- **/
            "index": 0,
            "part": 1,
            "template": "landing",
            "url": "landing",
            "h1": "Bienvenido al Piloto de Making Sense!",
            "h4": "Vamos a configurar el sensor Smart Citizen, y empezar a medir en breve",
            "contextButton1": "ENGLISH",
            "contextButton2": "CATALÀ",
            "segueButton": "SIGUE EN CASTELLANO"
        },
            {
                "index": 1,
                "part": 2,
                "template": "collaborators",
                "url": "making_sense",
                "companyLogo": "app/images/MS LOGO.png",
                "h2": "Making Sense es un proyecto que ayuda a las personas a entender su entorno.",
                "h4": "Queremos ayudarte a instalar sensores para entender la contaminación acústica. Tomando conciencia del problema, seremos capaces de abordarlo.",
                "segueButton": "SUENA BIEN!"
            },
            {
                "index": 2,
                "part": 3,
                "template": "collaborators",
                "url": "smart_citizen",
                "companyLogo": "app/images/SCK LOGO.png",
                "h2": "Smart Citizen es un movimiento para la participación ciudadana utilizando las últimas tecnologías.",
                "h4": "Smart Citizen crea herramientas abiertas para que los ciudadanos están mejor informado acerca del mundo a su alrededor.",
                "segueButton": "CONTINÚA"
            },
            {
                "index": 3,
                "part": 4,
                "template": "basic2",
                "url": "smart_citizen_brief",
                "image": "app/images/sck_glow.png",
                "h2": "El Kit de Smart Citizen",
                "h4": "Este sensor es el Kit de Smart Citizen para mediciones medioambientales. Mide sonido, calidad del aire, humedad y muchas cosas más",
                "segueButton": "CONTINÚA"
            },
            {
                "index": 4,
                "part": 5,
                "template": "basic2",
                "url": "smart_citizen_brief2",
                "image": "app/images/SCK_macbook.png",
                "h2": "smartcitizen.me",
                "h4": "El Kit envía todos los datos a la web de Smart Citizen. Es abierta y gratuita para todos, para ver, preguntar y jugar con ella...",
                "segueButton": "VAMOS"
            },


            /** -- WHATS IN THE BOX -- **/
            {
                "index": 10,
                "part": 1,
                "template": "basic",
                "url": "whats_in_the_box",
                "h1": "CONFIGUREMOS EL SENSOR",
                "h4": "En el Kit hay algunas piezas que tenemos que esamblar, revisemos que las tenemos todas",
                "segueButton": "ESTOY LISTO"
            },
            {
                "index": 11,
                "part": 2,
                "template": "selectparts",
                "url": "kit_parts",
                "h2": "Selecciona todas las piezas que has recibido",
                "h4": "Tenemos que saberlo para que la puedas configrarlo sin problemas",

                "part1": "Placa de Sensores",
                "part1_desc": "Es donde están todos los sensores. Se conecta a la placa de datos, para que los sensores puedan transmitir lo que han medido.",
                "part2": "Placa de Datos",
                "part2_desc": "Es donde se procesan todos los datos. Cada vez que quieras conectar algo al Kit de Smart Citizen, tendrás que hacerlo en esta placa",
                "part3": "Batería",
                "part3_desc": "Es lo que alimenta el sensor. Tiene que ser cargada a menudo, especialmente si se usa durante un periodo de tiempo prolongado.",
                "part4": "Cable USB",
                "part4_desc": "Cuando el Kit necesita ser cargado, puedes utilizar este cable para conectar el Kit a tu ordenador o a un enchufe del mismo modo que tu móvil.",
                "modalButton": "Entendido",

                "contextButton": "Dónde está mi carcasa?",
                "segueButton": "CONTINÚA",
                "segueButtonError": "Te faltan piezas?",
                "continueButton": "CONTINÚA",
                "yesButton": "SI",
                "noButton": "NO"
            },
            {
                "index": 12,
                "part": 3,
                "template": "selectparts2",
                "url": "carcasa",
                "h2": "Para finalizar...",
                "h4": "No es necesario tener la carcasa, pero es útil para proteger tu Kit contra la llúvia",

                "part5": "Carcasa",
                "part5_desc": "La carcasa es resistente al agua y permite colocar el dispositivo en diferentes superficies.",
                "part6": "Espaciadores",
                "part6_desc": "Situados entre las placas de sensores y de datos, mantienen las placas sujetas.",
                "part7": "Tapa",
                "part7_desc": "Cierra la carcasa y se utiliza para proteger el dispositivo de la lluvia. Asegurate de colocar los agujeros encima del sensor de sonido.",
                "part8": "Sujetadores",
                "part8_desc": "Se usan para fijar la tapa a la carcasa.",
                "modalButton": "Entendido",

                "contextButton": "Dónde está el mío?",
                "segueButton": "CONTINÚA",
                "segueButtonError": "Te faltan piezas?",
                "continueButton": "CONTINÚA",
                "yesButton": "SI",
                "noButton": "NO"
            },
            {
                "index": 13,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_parts",
                "h1": "BIEN HECHO",
                "h4": "Ahora vamos a ponerlo todo junto",
                "segueButton": "CONTINÚA"
            },
            {
                "index": 14,
                "part": 5,
                "template": "kitbuild1",
                "url": "kitbuild_1",
                "h2": "Primero, los separadores...",
                "text": "Coloca un separador en cada agujero de la placa de sensores",
                "segueButton": "DONE"
            },
            {
                "index": 15,
                "part": 6,
                "template": "kitbuild2",
                "url": "kitbuild_2",
                "h2": "Segundo, conectamos los sensores",
                "text": "Conecta las clavijas de la placa de sensores en la placa de datos",
                "segueButton": "HECHO"
            },
            {
                "index": 16,
                "part": 7,
                "template": "kitbuild3",
                "url": "kitbuild_3",
                "h2": "Vamos a darle alimetación",
                "text": "Conecta la batería con la placa de datos",
                "segueButton": "HECHO"
            },
            {
                "index": 17,
                "part": 8,
                "template": "kitbuild4",
                "url": "kitbuild_4",
                "h2": "Y por último, enciende el Kit",
                "text": "Presiona el botón en el Kit, hasta que la luz del esté en rojo.",
                "segueButton": "ESTÁ VIVO"
            },
            {
                "index": 18,
                "part": 9,
                "template": "casing",
                "url": "case_1",
                "h2": "Después, colocalo todo dentro de la carcasa",
                "text": "Asegurate de colocar el Kit con el cable de la batería hacia la parte inferior de la carcasa",
                "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosureBattSensor.png",
                "segueButton": "CONTINÚA"
            },
            // {
            //     "index": 19,
            //     "part": 10,
            //     "template": "casing",
            //     "url": "case_2",
            //     "h2": "... y para terminar, cierra la tapa",
            //     "text": "Coloca el plástico transparente en la parte delantera de la caja y fijalo en su lugar con las dos fijaciones blancas",
            //     "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosure-wShineclasps.png",
            //     "segueButton": "CONTINÚA"
            // },
            {
                "index": 19,
                "part": 11,
                "template": "comfirm",
                "url": "confirm_build",
                "h1": "BIEN HECHO",
                "h4": "Es la hora de conectarse a Internet",
                "segueButton": "CONTINÚA"
            },


            /** -- LIGHT HANDSHAKE -- **/
            {
                "index": 21,
                "part": 1,
                "template": "wifi_enter",
                "url": "wifi_enter",
                "h2": "Con qué red wi-fi vas a conectarte a internet?",
                "h4": "Debemos introducirla manualmente...",
                "input1": "Nombre del Wi-Fi",
                "input1_error": "Se requiere un nombre para conectarse a la red",
                "input2": "Contraseña",
                "input2_error": "",
                "segueButtonError": "COMPRUEBA LOS CAMPOS",
                "segueButton": "ESTÁ LISTO",
                "contextButton": "Pruébalo de otra manera",
                "contextButton2": "Pide ayuda",
                "continueButton": "CONTINÚA"
            },
            {
                "index": 22,
                "part": 2,
                "template": "handshake",
                "url": "handshake",
                "h2": "Ahora vamos a hacer algo de magia...",
                "h4": "Sostén tu Kit, sitúalo en la pantalla encima del cuadrado azul aquí abajo y presiona “conectar”. Asegurate de que el lado azul del Kit está hacia ti.",
                "handshakeLabel": "Coloque su Kit aquí",
                "waitLabel": "YA PUEDES QUITAR EL KIT",
                "segueButton": "CONECTAR",
                "continueButton": "CONTINÚA"
            },
            {
                "index": 23,
                "part": 3,
                "template": "wifi_check",
                "url": "wifi_check",
                "h2": "Oops, algo ha salido mal...",
                "h4": "Parece que hay un problema. Si la luz del Kit está en rojo, por favor vuelve a introducir el nombre del Wi-Fi y la contraseña",
                "segueButtonError": "COMPRUEBA LOS CAMPOS",
                "contextButton": "Pruébalo de otra manera",
                "contextButton2": "Pide ayuda",
                "waitLabel": "ESPERE",
                "segueButton": "CONECTAR",
                "continueButton": "CONTINÚA"
            },
            {
                "index": 24,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_handshake",
                "h1": "BIEN HECHO",
                "h4": "Ya tienes tu Kit conectado a internet!",
                "segueButton": "CONTINÚA"
            },

            /** -- WIFI HANDSHAKE -- **/
            {
                "index": 30,
                "part": 4,
                "template": "basic",
                "url": "accesspoint_pre",
                "h1": "VAMOS A PROBARLO CON TU MÓVIL O TABLET",
                "h4": "Este método es más robusto. Coge cualquier dispositivo móvil, smartphone o tablet.",
                "segueButton": "ENTENDIDO"
            },
            {
                "index": 31,
                "part": 5,
                "template": "prompted_entry",
                "url": "accesspoint_1",
                "h2": "En tu dispositivo móvil, accede a la configuración Wi-Fi y conecta a la red Wi-Fi llamada:",
                "h3_1": "El",
                "em_1": " número",
                "h3_2": " de tu Kit, ubicado en",
                "em_2": " la esquina inferior",
                "h3_3": " de tu Kit.",
                "h4": "Si no lo ves, asegurate que tu Kit está encendido y la luz está en rojo.",
                "promptedText": "SmartCitizen[...]",
                "segueButton": "CONECTADO"
            },
            {
                "index": 32,
                "part": 6,
                "template": "prompted_entry",
                "url": "accesspoint_2",
                "h2": "Deberías ver esta ventana en tu móvil o tablet",
                "h3_1": "Si no aparece, abre el navegador de tu móvil i visita",
                "em_1": " www.mysck.me",
                "h4": "Si aún no funciona comprueva que estás conectado al Wi-Fi",
                "promptedText": "mysck.me",
                "segueButton": "CONECTADO"
            },
            {
                "index": 33,
                "part": 6,
                "template": "prompted_entry",
                "url": "ap_final",
                "h2": "Selecciona tu Wi-Fi en la lista e introduce la contraseña. Cuando te pregunte por el código de onboarding escribe:",
                "h4": "Si el wifi y la contraseña presentados son correctos, se le redirigirá en breve, sigue las instrucciones en www.mysck.me",
                "promptedText": "EL CÓDIGO AQUÍ",
                "segueButton": "LISTO"
            },

            /** -- NAMING -- **/
            {
                "index": 40,
                "part": 1,
                "template": "basic",
                "url": "sensorName_prep",
                "h1": "VAMOS A DARLE UNA IDENTIDAD A TU SENSOR",
                "h4": "Esto nos ayudará a saber de dónde vienen los datos...",
                "segueButtonError": "VERIFICAR NOMBRE",
                "segueButton": "CONTINÚA"
            },
            {
                "index": 41,
                "part": 2,
                "template": "sensorName",
                "url": "sensorName",
                "h2": "Qué nombre le vamos a dar a tu Kit?",
                "h4": "Le puedes dar cualquier nombre. Así aparecerá en el mapa de Smart Citizen.",
                "input1": "Introduce el nombre del Kit",
                "input1_error": "El Kit necesita un nombre",
                "contextButton": "Elige cualquier nombre",
                "segueButtonError": "VERIFICAR NOMBRE",
                "segueButton": "HECHO"
            },


            /** -- LOCATION -- **/
            {
                "index": 50,
                "part": 1,
                "template": "location_prep",
                "url": "location_prep",
                "h2": "Donde instalarás tu Kit?",
                "h4": "Presionando 'permite' en la ventana de diálogo podemos determinar la ubicación actual del Kit. Después se puede ajustar manualmente a cualquier lugar en el que quieras ubicar el sensor.",
                "segueButton": "HECHO",
                "continueButton": "HECHO",
                "waitButton": "ESPERA"
            },
            {
                "index": 51,
                "part": 2,
                "template": "location_map",
                "url": "location_map",
                "h2": "Si deseas ajustarlo a otro lugar, puedes hacerlo aquí",
                "h4": "Recuerda que donde vaya tu dispositivo, necesitará Wi-fi.",
                "input1": "Introduce una dirección",
                "input1_error": "",
                "segueButton": "LISTO",
                "continueButton": "LISTO"

            },
            {
                "index": 52,
                "part": 3,
                "template": "location_tags",
                "url": "location_tags",
                "h2": "Selecciona las palabras que mejor describen la ubicación de tu sensor.",
                "h4": "Esto  ayudarà a otros usuarios entender mejor los datos que estás midiendo",
                "segueButton": "TODO CONFIGURADO",
                "continueButton": "TODO CONFIGURADO",
                "tags": ["Inside",
                    "Outside",
                    "Ground Floor",
                    "First Floor",
                    "Second Floor",
                    "Third Floor",
                    "Fourth Floor",
                    "Fifth Floor",
                    "Terrace",
                    "Garden",
                    "Balcony",
                    "Window",
                    "Residential",
                    "Commercial",
                    "Kitchen",
                    "Bedroom",
                    "Living Room",
                    "Bathroom"
                ]
            },
            {
                "index": 53,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_location",
                "h1": "CASI ESTAMOS",
                "h4": "Finalmente, guardemos todo el trabajo que hemos hecho.",
                "segueButton": "CONTINÚA"
            },


            /** -- ACCOUNT HERE -- **/
            {
                "index": 90,
                "part": 1,
                "template": "account1",
                "url": "email",
                "h2": "Podemos guardar el Kit con tu dirección de correo electrónico",
                "h4": "Si ya tienes una cuenta, lo añadiremos a esta. Si no la tienes, rapidamente crearemos una nueva",
                "segueButtonError": "CONSULTAR CORREO ELECTRÓNICO",
                "segueButton": "CONTINÚA",
                "input1": "Pon tu correo electrónico a continuación",
                "input1_error": "Debes poner un correo electrónico",
                "continueButton": "CONTINÚA"
            },
            {
                "index": 91,
                "part": 2,
                "template": "login",
                "url": "login",
                "h2a": "Excelente, bienvenido!",
                "h2b": "Ingresa tu contraseña abajo para terminar!",
                "h4": "Esto llevará todos los datos del Kit a tu cuenta",
                "input1": "Contraseña",
                "input1_error": "",
                "segueButtonError": "VERIFICAR CONTRASEÑA",
                "segueButton": "CONTINÚA",
                "contextButton": "OLVIDASTE CONTRASEÑA"

            },
            {
                "index": 95,
                "part": 2,
                "template": "make1",
                "url": "username",
                "h2": "Guay, eres nuevo en Smart Citizen?",
                "h4": "Agrega un nombre de usuario a tu perfil, así los usuarios sabrán quien es el dueño del Kit.",
                "input1": "Introduce un nombre de usuario",
                "input1_error": "Es necesario proporcionar un nombre de usuario",
                "contextButton": "Elige un nombre cualquiera",
                "segueButtonError": "VERIFICAR NOMBRE DE USUARIO",
                "segueButton": "CONTINÚA"
            },
            {
                "index": 96,
                "part": 3,
                "template": "make2",
                "url": "password",
                "h2": "Ahora, escribe una contraseña para asegurarlo todo",
                "h4a": "La contraseña debe tener al menos 8 caracteres de largo",
                "h4b": "Y una vez más para asegurarnos de que no hay errores",
                "input1": "Contraseña",
                "input1_error": "La contraseña debe tener al menos 5 caracteres de largo",
                "input1_error2": "Tienes que introducir una contraseña",
                "segueButtonError": "LAS CONTRASEÑAS DEBEN COINCIDIR",
                "segueButton": "TODO LISTO!",
                "continueButton": "TODO LISTO!"
            },
            {
                "index": 100,
                "part": 4,
                "template": "final",
                "url": "final",
                "h1": "ESTÁ VIVO!",
                "h2": "Has instalado y conectado satisfactoriamente tu Kit Smart Citizen a internet y agregado el Kit a la comunidad global de sensores",
                "h4": "Visita SmartCitizen.me para ver tu Kit en acción, capturando datos. No olvides leer el manual para las instrucciones de ensamblaje y consejos para instalar tu Kit en exteriores",
                "segueButton": "VISITAR SMARTCITIZEN.ME"
            }
        ],
        [
            {

            /** -- INTRO -- **/
            "index": 0,
            "part": 1,
            "template": "landing",
            "url": "landing",
            "h1": "Benvingut al Pilot de Making Sense!",
            "h4": "Configura el teu Smart Citizen Kit i comença a medir en un tres i no res",
            "segueButton": "CONTINUA EN CATALÀ!",
            "contextButton1": "ENGLISH",
            "contextButton2": "CASTELLANO",
        },
            {
                "index": 1,
                "part": 2,
                "template": "collaborators",
                "url": "making_sense",
                "companyLogo": "app/images/MS LOGO.png",
                "h2": "Making Sense és un projecte per ajudar a la gent a entendre millor el seu entorn.",
                "h4": "Volem ajudar-te a instal·lar sensors per entendre millor la contaminació acústica. Prenent conciència del problema serem capaços de resoldre'l.",
                "segueButton": "SONA BÉ!"
            },
            {
                "index": 2,
                "part": 3,
                "template": "collaborators",
                "url": "smart_citizen",
                "companyLogo": "app/images/SCK LOGO.png",
                "h2": "Smart Citizen és un moviment per la participació ciutadana utilitzant les últimes tecnologies.",
                "h4": "Smart Citizen crea eines obertes per ajudar els ciutadans a entendre millor el seu entorn.",
                "segueButton": "CONTINUA"
            },
            {
                "index": 3,
                "part": 4,
                "template": "basic2",
                "url": "smart_citizen_brief",
                "image": "app/images/sck_glow.png",
                "h2": "Smart Citizen Kit",
                "h4": "Aquest sensors és un Smart Citizen Kit. Mesura soroll, qualitat de l'aire, humitat, i moltes coses més.",
                "segueButton": "CONTINUA"
            },
            {
                "index": 4,
                "part": 5,
                "template": "basic2",
                "url": "smart_citizen_brief2",
                "image": "app/images/SCK_macbook.png",
                "h2": "smartcitizen.me",
                "h4": "El sensor envia totes les mesures a la web d'Smart Citizen. És lliure i oberta perquè tothom pugui veure i qüestionar les dades...",
                "segueButton": "FEM-HO"
            },


            /** -- WHATS IN THE BOX -- **/
            {
                "index": 10,
                "part": 1,
                "template": "basic",
                "url": "whats_in_the_box",
                "h1": "ANEM A INSTALAR EL SENSOR",
                "h4": "Hi han algunes peces que cal muntar per instalar el Kit, revisa que les tens totes.",
                "segueButton": "ESTIC APUNT"
            },
            {
                "index": 11,
                "part": 2,
                "template": "selectparts",
                "url": "kit_parts",
                "h2": "Seleccionna totes les peces que has rebut",
                "h4": "Hem d'assegurar-nos'en per poder seguir amb la instalació",

                "part1": "Sensor Board",
                "part1_desc": "Aquesta placa conté tots els sensors. Es connecta a la més gran de manera que els sensors puguin transmetre les dades.",
                "part2": "Hardware Board",
                "part2_desc": "Aquí és on tot el processament es duu a terme. Cada vegada que vulguis connectar algun sensor l'Smart Citizen Kit, serà en aquesta placa",
                "part3": "Bateria",
                "part3_desc": "Això alimenta el sensor. Cal carregar-la sovint, sobretot després de periodes d'ús continuats.",
                "part4": "Cable de càrrega",
                "part4_desc": "Quan vulguis carregar el Kit, pots conectar el Kit a un ordinador o carregador USB, tal com ho fas amb el teu móbil.",
                "modalButton": "Entès",

                "contextButton": "On és la carcassa?",
                "segueButton": "CONTINUA",
                "segueButtonError": "Are you missing parts?",
                "continueButton": "CONTINUA",
                "yesButton": "SÍ",
                "noButton": "NO"
            },
            {
                "index": 12,
                "part": 3,
                "template": "selectparts2",
                "url": "case",
                "h2": "Finally...",
                "h4": "La carcassa no és indispensable, però és útil per protegir el Kit contra la pluja",

                "part5": "Carcassa",
                "part5_desc": "La carcassa és resistent a l'aigua i permet col·locar el dispositiu en diferents superfícies.",
                "part6": "Espaiadors",
                "part6_desc": "Situats entre les plaques de sensors i de dades, mantenen les plaques subjectes",
                "part7": "Tapa",
                "part7_desc": "Tanca la carcassa i s'utilitza per protegir el dispositiu de la pluja. Assegura't de col·locar els forats sobre del sensor de so.",
                "part8": "Fixadors",
                "part8_desc": "S'usen per fixar la tapa a la carcassa.",
                "modalButton": "Entès",

                "contextButton": "On és el meu?",
                "segueButton": "CONTINUA",
                "segueButtonError": "Et falten peces?",
                "continueButton": "CONTINUA",
                "yesButton": "SÍ",
                "noButton": "NO"
            },
            {
                "index": 13,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_parts",
                "h1": "BEN FET",
                "h4": "Ara anem a muntar-ho tot junt",
                "segueButton": "CONTINUA"
            },
            {
                "index": 14,
                "part": 5,
                "template": "kitbuild1",
                "url": "kitbuild_1",
                "h2": "Primer, els separadors...",
                "text": "Col·loca un separador en cada forat de la placa de sensors",
                "segueButton": "FET"
            },
            {
                "index": 15,
                "part": 6,
                "template": "kitbuild2",
                "url": "kitbuild_2",
                "h2": "Després, connectem els sensor",
                "text": "Connecta els pins de la placa de sensors a la placa de dades",
                "segueButton": "FET"
            },
            {
                "index": 16,
                "part": 7,
                "template": "kitbuild3",
                "url": "kitbuild_3",
                "h2": "Donem-li alimetació",
                "text": "Connecta la bateria amb la placa de dades",
                "segueButton": "FET"
            },
            {
                "index": 17,
                "part": 8,
                "template": "kitbuild4",
                "url": "kitbuild_4",
                "h2": "I finalment, encén el Kit",
                "text": "Pressiona el botó del Kit, fins que el color del llum sigui vermell.",
                "segueButton": "FUNCIONA!"
            },
            {
                "index": 18,
                "part": 9,
                "template": "casing",
                "url": "case_1",
                "h2": "A continuació posa-ho tot dins la carcassa",
                "text": "Assegura't de col·locar el Kit amb el cable de la bateria cap a la part inferior de la carcassa",
                "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosureBattSensor.png",
                "segueButton": "CONTINUA"
            },
            // {
            //     "index": 19,
            //     "part": 10,
            //     "template": "casing",
            //     "url": "case_2",
            //     "h2": "... i per acabar, posa la tapa.",
            //     "text": "Col·loca el plàstic transparent damunt la caixa i fixa'l al seu lloc amb les dues fixacions blanques",
            //     "image": "app/images/BOARDS-CUTOUT_0007_FRONT-eclosure-wShineclasps.png",
            //     "segueButton": "CONTINUA"
            // },
            {
                "index": 19,
                "part": 11,
                "template": "comfirm",
                "url": "confirm_build",
                "h1": "BEN FET",
                "h4": "És l'hora de connectar-se a Internet",
                "segueButton": "CONTINUA"
            },


            /** -- LIGHT HANDSHAKE -- **/
            {
                "index": 21,
                "part": 1,
                "template": "wifi_enter",
                "url": "wifi_enter",
                "h2": "A quina xarxa Wi-Fi vols connectar el teu Kit a internet?",
                "h4": "Hauràs d'escriure-la manualment...",
                "input1": "Nom de la xarxa Wi-Fi",
                "input1_error": "Has d'escriure el nom d'una xarxa Wi-Fi",
                "input2": "Contrasenya",
                "input2_error": "",
                "segueButtonError": "COMROVA ELS CAMPS",
                "segueButton": "APUNT!",
                "contextButton": "Prova-ho d'una altre manera...",
                "contextButton2": "Demana ajuda",
                "continueButton": "CONTINUA"
            },
            {
                "index": 22,
                "part": 2,
                "template": "handshake",
                "url": "handshake",
                "h2": "Ara  farem una mica de màgia.",
                "h4": "Sostén el teu Kit contra la pantalla sobre del quadrat blau que apareix a sota i prem “conectar”. Assegura't que el costat blau del Kit mira cap a tu.",
                "handshakeLabel": "Coloca el teu Kit aquí",
                "waitLabel": "JA POTS TREURE EL KIT",
                "segueButton": "CONECTA",
                "continueButton": "CONTINUA"
            },
            {
                "index": 23,
                "part": 3,
                "template": "wifi_check",
                "url": "wifi_check",
                "h2": "Oops, alguna cosa ha fallat...",
                "h4": "Sembla que hi ha un problema. Fixa't si la llum del Kit segueix vermella, siusplau torna a escriure el nom i la contraseña del teu Wi-Fi",
                "segueButtonError": "COMPROVA ELS CAMPS",
                "contextButton": "Prova-ho d'una altra manera",
                "contextButton2": "Demana ajuda",
                "waitLabel": "ESPERA",
                "segueButton": "CONECTA",
                "continueButton": "CONTINUA"
            },
            {
                "index": 24,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_handshake",
                "h1": "BEN FET!",
                "h4": "Has conectat el teu Kit a Internet!",
                "segueButton": "CONTINUA"
            },

            /** -- WIFI HANDSHAKE -- **/
            {
                "index": 30,
                "part": 4,
                "template": "basic",
                "url": "accesspoint_pre",
                "h1": "ANEM A PROVAR-HO AMB EL TEU MÒBIL O TABLET",
                "h4": "Aquest mètode és més robust. Necessites qualsevol dispositiu móvil, smartphone o tablet.",
                "segueButton": "ENTÈS"
            },
            {
                "index": 31,
                "part": 5,
                "template": "prompted_entry",
                "url": "accesspoint_1",
                "h2": "Des del teu dispositiu mòbil acedeix a la configuració Wi-Fi y conecta't a la xarxa Wi-Fi:",
                "h3_1": "El",
                "em_1": " número",
                "h3_2": " del teu Kit, es troba",
                "em_2": " a la cantonada inferior",
                "h3_3": " del teu kit.",
                "h4": "Si no trobes la xarxa, assegura't que el teu Kit està encès i el llum és vermell.",
                "promptedText": "SmartCitizen[...]",
                "segueButton": "CONNECTAT"
            },
            {
                "index": 32,
                "part": 6,
                "template": "prompted_entry",
                "url": "accesspoint_2",
                "h2": "Hauries de veure aquesta pantalla al teu mòbil o tablet",
                "h3_1": "Si no apareix obre el nagegador del teu móvil i visita",
                "em_1": " www.mysck.me",
                "h4": "Si encara no funciona comproba que estàs connectat al Wi-Fi",
                "promptedText": "mysck.me",
                "segueButton": "CONNECTAT"
            },
            {
                "index": 33,
                "part": 6,
                "template": "prompted_entry",
                "url": "ap_final",
                "h2": "Selecciona el teu Wi-Fi a la lista i introdueix la contraseña. Quan et pregunti pel codi de l'onboarding escriu:",
                "h4": "Si el Wi-Fi y la contrasenya son correctos, seràs redirigit en breu. Segueix les instrucions a www.mysck.me",
                "promptedText": "EL CÓDI ÉS AQUÍ",
                "segueButton": "LLEST"
            },


            /** -- NAMING -- **/
            {
                "index": 40,
                "part": 1,
                "template": "basic",
                "url": "sensorName_prep",
                "h1": "ÉS L'HORA DE DONAR-LI UN NOM AL TEU SENSOR",
                "h4": "Això ens ajudarà a saber d'on venen les dades...",
                "segueButtonError": "ESCULL UN NOM",
                "segueButton": "CONTINUA"
            },
            {
                "index": 41,
                "part": 2,
                "template": "sensorName",
                "url": "sensorName",
                "h2": "Quin nom li vols donar al teu Kit?",
                "h4": "Li pots dir com vulguis. Així és com apareixerà al mapa d'Smart Citizen.",
                "input1": "Escriu el nom del Kit",
                "input1_error": "El Kit necessita un nom",
                "contextButton": "Escull un nom aleatori",
                "segueButtonError": "REPASSA EL NOM",
                "segueButton": "DONE"
            },


            /** -- LOCATION -- **/
            {
                "index": 50,
                "part": 1,
                "template": "location_prep",
                "url": "location_prep",
                "h2": "On instal·laràs el Kit?",
                "h4": "Pressionant 'permet' a la finestra de diàleg podrem determinar la ubicació actual del Kit. Després pots ajustar-la manualment a qualsevol lloc on vulguis situar el Kit.",
                "segueButton": "FET",
                "continueButton": "FET!",
                "waitButton": "ESPERA"
            },
            {
                "index": 51,
                "part": 2,
                "template": "location_map",
                "url": "location_map",
                "h2": "Si vols ajustar la ubicació ho pot fer aquí.",
                "h4": "Recorda que el teu dispositiu necessita tenir accés Wi-Fi. Si no és així les dades no es guardaràn en temps real a la plataforma.",
                "input1": "Introdueix la teva adreça",
                "input1_error": "",
                "segueButton": "FET",
                "continueButton": "FET"
            },
            {
                "index": 52,
                "part": 3,
                "template": "location_tags",
                "url": "location_tags",
                "h2": "Selecciona les paraules que millor descriuen el lloc on has instal·lat el Kit",
                "h4": "Això ens ajudarà a saber el que estàs medint",
                "segueButton": "TOT APUNT",
                "continueButton": "TOT APUNT",
                "tags": ["Inside",
                    "Outside",
                    "Ground Floor",
                    "First Floor",
                    "Second Floor",
                    "Third Floor",
                    "Fourth Floor",
                    "Fifth Floor",
                    "Terrace",
                    "Garden",
                    "Balcony",
                    "Window",
                    "Residential",
                    "Commercial",
                    "Kitchen",
                    "Bedroom",
                    "Living Room",
                    "Bathroom"
                ]
            },
            {
                "index": 53,
                "part": 4,
                "template": "comfirm",
                "url": "confirm_location",
                "h1": "GAIREBÉ ESTEM",
                "h4": "Finalment, és hora de guardar tot el que has configurat",
                "segueButton": "CONTINUA"
            },


            /** -- ACCOUNT HERE -- **/
            {
                "index": 90,
                "part": 1,
                "template": "account1",
                "url": "email",
                "h2": "Podem guardar el Kit amb la teva adreça de correu electrònic",
                "h4": "Si ja tens un compte a Smart Citizen l'afegirem allà. Si no, we'll quickly make a new one",
                "segueButton": "CONTINUA",
                "input1": "Afegeix el teu correu a continuació",
                "input1_error": "Cal que afegeixis una adreça",
                "segueButtonError": "COMPROVA L'ADREÇA",
                "continueButton": "CONTINUA"
            },
            {
                "index": 91,
                "part": 2,
                "template": "login",
                "url": "login",
                "h2a": "Genial, ben tornat!",
                "h2b": "Escriu la teva contrasenya a sota per acabar!",
                "h4": "Això enviarà a la plataforma totes les dades que has configurat sobre el teu Kit!",
                "input1": "Contrasenya",
                "input1_error": "",
                "segueButtonError": "REPASSA LA CONTRASENYA",
                "segueButton": "CONTINUA",
                "contextButton": "Oblivar CONTRASENYA"

            },
            {
                "index": 95,
                "part": 2,
                "template": "make1",
                "url": "username",
                "h2": "Guai, sembla que ets nou a Smart Citizen?",
                "h4": "Afegeix un nom d'usuari al teu perfil, d'aquesta manera els altres usuaris sabràn de qui és el Kit.",
                "input1": "Afegeix un nom d'usuari",
                "input1_error": "El nom d'usuari és obligatori",
                "contextButton": "Escull un nom aleatori",
                "segueButtonError": "VALIDA EL NOM D'USUARI",
                "segueButton": "CONTINUA"
            },
            {
                "index": 96,
                "part": 3,
                "template": "make2",
                "url": "password",
                "h2": "Ara, afegeix una contrasenya per protegir el teu usuari",
                "h4a": "La contrasenya ha de tenir com a mínim 8 caràcters",
                "h4b": "I una vegada més per assegurar-nos que no hi han errors.",
                "input1": "Password",
                "input1_error": "La contrasenya ha de tenir com a mínim 5 caràcters",
                "input1_error2": "Has d'introduir una contrasenya",
                "segueButtonError": "LES CONTRASENYES NO COINCIDEIXEN",
                "segueButton": "LLESTOS!",
                "continueButton": "LLESTOS!"
            },
            {
                "index": 100,
                "part": 4,
                "template": "final",
                "url": "final",
                "h1": "ÉS VIU!",
                "h2": "El Kit ha estat configurat amb èxit i ja està publicant a Smart Citizen, la comunitat global de sensors",
                "h4": "Visita SmartCitizen.me  per veure el teu Kit en acció publicant dades. No t'oblidis de llegir el el manual amb les instrucciones d'instal·lació i consell sobre com col·locar-lo a l'exterior.",
                "segueButton": "VISIT SMARTCITIZEN.ME"
            }
        ]
    ];

    var modalContent = [
        [
            {
                title: "Uh oh",
                body: "It seems like you are missing parts of the kit. If that’s so, let’s notify the team and they’ll get back to you as soon as possible",
                image: "app/images/alert.svg",
                button: "Notify the team!",
                action: "email"
            }
        ],
        [],
        []
    ];


    this.modalBox = function (type, lang) {
        var langValue = 0;
        if (lang == "esp") {
            langValue = 1;
            console.log("loading Spanish");
        } else if (lang == "cat") {
            langValue = 2;
            console.log("loading Catalan");
        } else {
            console.log("loading English");
        }
        return modalContent[langValue][type];
    };

    function getPageContent(val, index) {
        if (index == undefined) {
            index = 0;
        }
        var content = pageContent[index];
        for (var i = 0; i < content.length; i++) {
            if (content[i].index == val) {
                return (content[i]);
            }
        }
    }

    function getURLContent(url) {
        for (var i = 0; i < pageContent.length; i++) {
            if (pageContent[i].url == url) {
                return (pageContent[i]);
            }
        }
    }

    this.prep = function (val, lang) {
        var langValue = 0; //default eng
        if (lang == "esp") {
            langValue = 1;
            console.log("loading Spanish");
        } else if (lang == "cat") {
            langValue = 2;
            console.log("loading Catalan");
        } else {
            console.log("loading English");
        }
        return payloadGenerate(getPageContent(val, langValue), langValue)
    };

    this.nextPage = function (val, accountPresent) {
        if (val == 4) {
            return ('whats_in_the_box');
        } else if (val == 19) {
            return getPageContent(val + 2).url;
        } else if (val == 23) {
            return ('handshake');
        } else if (val == 24) {
            return ('sensorName_prep');
        } else if (val == 41) {
            return ('location_prep');
        } else if (val == 53) {
            return ('email');
        } else if (val == 90) {
            if (accountPresent) {
                return ('login');
            } else {
                return ('username');
            }
        } else if (val == 91) {
            return ('final');
        } else if (val == 96) {
            return ('final');
        }
        else {
            return (getPageContent(val + 1).url);
        }
    };
    this.previousPage = function (val, accountPresent) {
        if (val == 10) {
            return ('smart_citizen_brief2')
        } else if (val == 21) {
            return getPageContent(val - 2).url;
        } else if (val == 30) {
            return ('wifi_check');
        } else if (val == 40) {
            return ('confirm_handshake');
        } else if (val == 50) {
            return ('sensorName');
        } else if (val == 90) {
            return ('confirm_location');
        } else if (val == 95) {
            return ('email');
        } else if (val == 100) {
            if (accountPresent) {
                return ('login');
            } else {
                return ('password');
            }
        }
        else {
            return (getPageContent(val - 1).url);
        }
    };

    function payloadGenerate(content, value) {
        if (value == undefined) {
            value = 0;
        }
        var pC = pageContent[value];

        var payload = content;

        var index = pC.findIndex(function (item, i) {
            return item.index === payload.index;
        });
        // console.log(index);

        payload.progressLeftLabel = setupProgressLeft(payload.index).toString() + " / 6";
        payload.progressRightLabel = setupProgressRight(payload.index).toString() + " step #" + payload.part;
        payload.progressVal = (index / pC.length) * 100;

        payload.companyLogo = content.companyLogo;
        payload.image = content.image;


        if ((content.index >= 1) && (content.index < 100)) {
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

    this.templateRowCounter = function (index) {

        var tuples;
        switch (getPageContent(index).template) { //constants for getting rows in templates
            case "basic":
            case "pair1":
                tuples = 2;
                break;
            case "sensorName":
            case "final":
            case "make1":
            case "make2":
            case "wifi_check":
            case "landing":
            case "login":
                tuples = 4;
                break;
            default:
                tuples = 3;
        }
        return tuples; //change to array syntax
    };

    function setupProgressLeft(index) {
        if (index <= 4) {
            return 1;
        } else if (index <= 19) {
            return 2;
        } else if (index <= 34) {
            return 3;
        } else if (index <= 41) {
            return 4;
        } else if (index <= 53) {
            return 5;
        } else {
            return 6;
        }
    }

    function setupProgressRight(index) {
        if (index <= 4) {
            return "Introduction";
        } else if (index <= 19) {
            return "What's in the Box";
        } else if (index <= 33) {
            return "Handshake";
        } else if (index <= 41) {
            return "Naming";
        } else if (index <= 53) {
            return "Location";
        } else {
            return "Account";
        }
    }

}).controller('baseController', function ($scope, $stateParams, scopePayload, AnimationService, $rootScope) {
    $rootScope.lang = $stateParams.lang;
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl = 'ready';
    $scope.$parent.smartCitizenToggle = '';
});