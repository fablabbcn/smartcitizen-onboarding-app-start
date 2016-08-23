'use strict';

angular.module('myApp').controller('nameCtlr', function($scope) {
    var nounWordList = [];
    var adjectiveWordList = [];

    nounWordList.push.apply(nounWordList,
        [
            'mushroom',
            'pillow',
            'crocodile',
            'eggnog',
            'sailboat',
            'towel',
            'racer',
            'airship',
            'cow',
            'tour',
            'stack',
            'berry',
            'self',
            'substance',
            'note',
            'stag',
            'wing',
            'official',
            'shadow',
            'clank',
            'yam',
            'anagram',
            'celery',
            'spark',
            'waiter',
            'diner',
            'parent',
            'playground'
        ]);
    adjectiveWordList.push.apply(adjectiveWordList,
        [
            'fast',
            'giant',
            'elite',
            'loving',
            'cultured',
            'slim',
            'rare',
            'silly',
            'bouncy',
            'warm',
            'silky',
            'spotted',
            'yummy',
            'roasted',
            'outstanding',
            'friendly',
            'ritzy',
            'familiar',
            'neighborly',
            'marvelous',
            'six',
            'future',
            'long',
            'lively',
            'satisfying'
        ]);

    function getRandomIndex(list) {
        return Math.floor(Math.random() * (list.length - 0));
    }
    function toTitleCase(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    $scope.generateName = function(){
        var name = toTitleCase(adjectiveWordList[getRandomIndex(adjectiveWordList)]) + ' ' +
            toTitleCase(nounWordList[getRandomIndex(nounWordList)]) + ' ' +
            toTitleCase(nounWordList[getRandomIndex(nounWordList)]);
        $scope.$parent.submittedData.kitName = name;
        $scope.input = name;
        prepSegue();
    };

    $scope.listener = function(){
      if( (typeof $scope.input !== 'undefined') && ($scope.input.length >= 1) ){
          prepSegue();
      } else {
          blockSegue();
      }
    };


    function prepSegue(){
        $scope.$parent.segueControl ='ready';
    }
    function blockSegue(){
        $scope.$parent.segueControl ='blocked';
    }

    blockSegue();


});