export function accountController($scope, scopePayload, AnimationService, platform, $timeout, $rootScope, $stateParams, session) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);

    $scope.$parent.segueControl = 'ready';
    $scope.showPasswordToggle = 'password';
    $scope.forcePassword = false;

    $scope.given_email = ( $scope.$parent.submittedData.user.email == ' ' ? '' : $scope.$parent.submittedData.user.email);
    $scope.given_username = ( $scope.$parent.submittedData.user.username == ' ' ? '' : $scope.$parent.submittedData.user.username);

    $scope.$parent.submittedData.deviceData = {
        device_token: session.device_token
    };

    /********** Watchers **********/

    $scope.accountListener = function () {
        $scope.payload.segueButton = $scope.payload.continueButton;
        if (validateEmail($scope.given_email)) {
            $scope.$parent.submittedData.user.email = $scope.given_email;
            checkEmailPresence($scope.given_email.toLowerCase());
            prepSegue();
        } else {
            blockSegue();
        }
    };

    $scope.passwordListener = function () {
        $scope.payload.segueButton = $scope.payload.continueButton;
        if ((typeof $scope.pass1 !== 'undefined') && ($scope.pass1.length > 0) && ($scope.pass1 == $scope.pass2)) {
            $scope.$parent.submittedData.user.password = $scope.pass1;
            platform.createUser($scope.$parent.submittedData.user).then(function (data) {
                loginAndBakeDevice();
            }, function (res) {
                console.log(res);

                blockSegue();
            });
        } else {
            blockSegue();
        }
    };

    $scope.loginListener = function () {
        blockSegue();
        if ((typeof $scope.pass !== 'undefined') && ($scope.pass.length >= 5)) {
            $scope.$parent.submittedData.user.password = $scope.pass;
            loginAndBakeDevice();
        }
        else {
            blockSegue();
        }
    };

    $scope.usernameListener = function () {
        $scope.$parent.submittedData.user.username = $scope.given_username;

        $scope.$parent.userName = $scope.input; // Is this need it?

        // bannedWords temporary check. It should be implemented on the API
        if (bannedWords($scope.$parent.submittedData.user.username)) {
            blockSegue();
        } else {
            platform.getUser($scope.$parent.submittedData.user).then(function (data) {
                blockSegue();
            }, function (res) {
                prepSegue();
            });
        }

    };

    $scope.generateName = function () {

        $scope.given_username = $scope.$parent.submittedData.user.email.split("@")[0] + '_' + Math.floor(Math.random() * (99 - 1 + 1));
        $scope.$parent.submittedData.user.username = $scope.given_username;
        prepSegue();
        $scope.$parent.userName = $scope.input;
    };

    $scope.showPassword = function (tgl) {
        if ($scope.forcePassword == true) {
            return;
        }
        if (tgl == true) {
            $scope.showPasswordToggle = 'text';
        }
        else {
            $scope.showPasswordToggle = 'password';
        }
    };

    $scope.forceShowPassword = function () {
        if ($scope.forcePassword == false) {
            $scope.forcePassword = true;
            $scope.showPasswordToggle = 'text';
            console.log('showing');
        }
        else {
            $scope.forcePassword = false;
            $scope.showPasswordToggle = 'password';
            console.log('hide');
        }
    };

    $scope.forgotPassword = function () {
        platform.resetPassword($scope.$parent.submittedData.user.email).then(function(data) {
            $scope.$parent.resetEmailSent();
        }, function(data){
            console.error('There was a problem sending the reset password email');
        });
    };

    /********** Functions **********/

    function loginAndBakeDevice() {
        platform.login($scope.$parent.submittedData.user).then(function (data) {
            platform.setAuth(data);
            console.log("logged in successful");
            $timeout(function () {
                platform.bakeDevice().then(function (data) {
                    console.log("baked successful", data);
                    $timeout(function () {
                        $scope.$parent.submittedData.deviceData.id = data.id;
                        prepSegue();
                        $rootScope.$broadcast('forceSegue', {
                            target: 'wizard.final',
                            params: {lang: $stateParams.lang}
                        });
                    }, 250); // This is temp
                }, function () {
                    console.log("baked failed", data);
                    blockSegue();
                });
            }, 250); // This is temp
        }, function (data) {
            console.log(data);
            blockSegue();
        })
    }

    function checkEmailPresence(emailString) {
        platform.checkEmail(emailString).then(function (data) {
            console.log(data);
            $scope.$parent.submittedData.user.username = data.username;
            $scope.$parent.pre_made = true;
        }, function (data) {
            console.log(data);
            $scope.$parent.pre_made = false;
            $scope.$parent.submittedData.user.username = ' ';
        })
    }

    function prepSegue() {
        $scope.$parent.segueControl = 'ready';
    }

    function blockSegue() {
        $scope.$parent.segueControl = 'blocked';
    }

    function checkSegue() {
        // This needs a full cleanup
        if (
            ($scope.$parent.payload.url == 'email') && (validateEmail($scope.given_email)) ||
            ($scope.$parent.payload.url == 'username') && ($scope.given_username)
        ) {
            prepSegue();
        } else {
            blockSegue();
        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // This check should be implemented on the API

    function bannedWords(username){
        var TEMP_BANNED_WORDS = ['about','access','account','accounts','add','address','adm','admin','administration','adult','advertising','affiliate','affiliates','ajax','analytics','android','anon','anonymous','api','app','apps','archive','atom','auth','authentication','avatar','backstage','backup','banner','banners','bin','billing','blog','blogs','board','bot','bots','business','chat','cache','cadastro','calendar','campaign','careers','cgi','client','cliente','code','comercial','compare','config','connect','contact','contest','create','code','compras','css','dashboard','data','db','design','delete','demo','design','designer','dev','devel','dir','directory','doc','docs','domain','download','downloads','edit','editor','email','ecommerce','forum','forums','faq','favorite','feed','feedback','flog','follow','file','files','free','ftp','gadget','gadgets','games','guest','group','groups','help','home','homepage','host','hosting','hostname','html','http','httpd','https','hpg','info','information','image','img','images','imap','index','invite','intranet','indice','ipad','iphone','irc','java','javascript','job','jobs','js','knowledgebase','lab','labs','log','login','logs','logout','list','lists','mail','mail1','mail2','mail3','mail4','mail5','mailer','mailing','mx','manager','marketing','master','me','media','message','microblog','microblogs','mine','mp3','msg','msn','mysql','messenger','mob','mobile','movie','movies','music','musicas','my','name','named','net','network','new','news','newsletter','nick','nickname','notes','noticias','ns','ns1','ns2','ns3','ns4','old','online','operator','order','orders','page','pager','pages','panel','password','people','perl','person','pic','pics','photo','photos','photoalbum','php','plugin','plugins','pop','pop3','post','postmaster','postfix','posts','profile','project','projects','promo','pub','public','python','random','register','registration','root','ruby','rss','sale','sales','sample','samples','script','scripts','secure','send','service','shop','sql','signup','signin','search','security','settings','setting','setup','site','sites','sitemap','smtp','soporte','ssh','stage','staging','start','subscribe','subdomain','suporte','support','stat','static','stats','status','store','stores','system','tablet','tablets','tech','telnet','test','test1','test2','test3','teste','tests','theme','themes','tmp','todo','task','tasks','tools','tv','talk','update','upload','url','user','users','username','usuario','usage','vendas','video','videos','visitor','win','ww','www','www1','www2','www3','www4','www5','www6','www7','wwww','wws','wwws','web','webmail','website','websites','webmaster','workshop','xxx','xpg','you','ass','ass','lick','asses','asshole','assholes','asskisser','asswipe','balls','bastard','beastial','beastiality','beastility','beaver','belly','whacker','bestial','bestiality','bitch','bitcher','bitchers','bitches','bitchin','bitching','blow','job','blowjob','blowjobs','bonehead','boner','brown','eye','browneye','browntown','bucket','cunt','bull','shit','bullshit','bum','bung','hole','butch','butt','butt','breath','butt','fucker','butt','hair','buttface','buttfuck','buttfucker','butthead','butthole','buttpicker','chink','circle','jerk','clam','clit','cobia','cock','cocks','cocksuck','cocksucked','cocksucker','cocksucking','cocksucks','cooter','crap','cum','cummer','cumming','cums','cumshot','cunilingus','cunillingus','cunnilingus','cunt','cuntlick','cuntlicker','cuntlicking','cunts','cyberfuc','cyberfuck','cyberfucked','cyberfucker','cyberfuckers','cyberfucking','damn','dick','dike','dildo','dildos','dink','dinks','dipshit','dong','douche','bag','dumbass','dyke','ejaculate','ejaculated','ejaculates','ejaculating','ejaculatings','ejaculation','fag','fagget','fagging','faggit','faggot','faggs','fagot','fagots','fags','fart','farted','farting','fartings','farts','farty','fatass','fatso','felatio','fellatio','fingerfuck','fingerfucked','fingerfucker','fingerfuckers','fingerfucking','fingerfucks','fistfuck','fistfucked','fistfucker','fistfuckers','fistfucking','fistfuckings','fistfucks','fuck','fucked','fucker','fuckers','fuckin','fucking','fuckings','fuckme','fucks','fuk','fuks','furburger','gangbang','gangbanged','gangbangs','gaysex','gazongers','goddamn','gonads','gook','guinne','hard','on','hardcoresex','homo','hooker','horniest','horny','hotsex','hussy','jack','off','jackass','jacking','off','jackoff','jap','jerk','jism','jiz','jizm','jizz','kike','kock','kondum','kondums','kraut','kum','kummer','kumming','kums','kunilingus','lesbian','lesbo','merde','mick','mothafuck','mothafucka','mothafuckas','mothafuckaz','mothafucked','mothafucker','mothafuckers','mothafuckin','mothafucking','mothafuckings','mothafucks','motherfuck','motherfucked','motherfucker','motherfuckers','motherfuckin','motherfucking','motherfuckings','motherfucks','muff','nigger','niggers','orgasim','orgasims','orgasm','orgasms','pecker','penis','phonesex','phuk','phuked','phuking','phukked','phukking','phuks','phuq','pimp','piss','pissed','pissrr','pissers','pisses','pissin','pissing','pissoff','prick','pricks','pussies','pussy','pussys','queer','retard','schlong','screw','sheister','shit','shited','shitfull','shiting','shitings','shits','shitted','shitter','shitters','shitting','shittings','shitty','slag','sleaze','slut','sluts','smut','snatch','spunk','stupid','twat','wanker','wetback','whore','wop'];
        var SEPARATORS = [' ', '\\\+', '-', '\\\(', '\\\)', '\\*', '/', ':', '\\\?'];

        var usernameWords = username.split(new RegExp(SEPARATORS.join('|'), 'g'));

        for (var i = 0; i < usernameWords.length; i++) {
            var usernameWord = usernameWords[i].toLowerCase()
            if (TEMP_BANNED_WORDS.includes(usernameWord)) return true;
        }

        return false;
    }



    checkSegue();

}

accountController.$inject = ['$scope', 'scopePayload', 'AnimationService', 'platform', '$timeout', '$rootScope', '$stateParams', 'session'];
