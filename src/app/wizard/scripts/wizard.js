'use strict';

angular.module('app').controller('wizardCtrl', function ($scope, $location, $sce, $window, $timeout, SegueService, $rootScope, AnimationService) {

    function bindContent(index) {

        console.log('BINDING');

        console.log($location.path());
        var loc = $location.path();
        console.log(loc.split('/wizard/')[1]);

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
                    "<span class='tooltip-content clearfix'><img src='images/" + content.tooltip[i].bodyImage + "'>" +
                    "<span class='tooltip-text'><strong>" + content.tooltip[i].title + ": </strong>" +
                    content.tooltip[i].body + " <a href='#'>" + content.tooltip[i].linkText + "</a></span></span></span>"
            }
            text += plain[content.tooltip.length] + "<p>";
            console.log(text);
            $scope.buildInstructions = $sce.trustAsHtml(text);
        }

        $scope.segueControl = 'ready';


        $scope.buildInstructions = content.buildInstructions;

        $scope.currentState = content.currentState;
        $scope.segueButton = content.segueButton;
        $scope.contextButton = content.contextButton;

        $scope.companyLogo = "app/images/" + content.companyLogo;
        $scope.image = "app/images/" + content.image;

        //sanity and comparative check
        $scope.index = index;
        $scope.template = content.template;

        $scope.pos;
        //console.log($scope.pos);

        $scope.networks = [
            "Your Secured Network",
            "Other Secured network",
            "Other Unsecured Network"
        ];

        $scope.warning = content.warning;
    };

    /** Submitted User Data **/
    $scope.submittedData = {};
    $scope.submittedData.kitName = '';


    /** Functions below **/
    $scope.seque = function () {
        if ($scope.segueControl == 'ready') {
            //compare templates

            AnimationService.leaving(true);
            $timeout(function () {
                $location.path('/wizard/' + SegueService.nextPage($scope.payload.index));
                $window.scrollTo(0, 0);
            }, 500); // see animations max duration time
        } else {
            handleError();
        }
    };

    $scope.back = function () {
        if ($scope.payload.backBlock != 'blocked') {
            //compare templates
            AnimationService.leaving(false);
            $timeout(function () {
                $scope.segueControl ='ready';
                $location.path('/wizard/' + SegueService.previousPage($scope.payload.index));
                $window.scrollTo(0, 0);
            }, 500); // see animations max duration time

        }
        //else {
        //    alert('blocked');
        //}
    };



    function handleError(){
        $scope.segueControl = 'error';
        $scope.errorButton = 'show';
        $rootScope.$broadcast('blockedSegue');
        $timeout(function(){
            $scope.payload.segueButton = $scope.payload.segueButtonError;
        }, 250); //half of animation time defined in _navigation.scss
    }

    $scope.$on('removeError', function(){
       removeError();
    });

    function removeError(){
        $scope.errorButton = '';
    }
});