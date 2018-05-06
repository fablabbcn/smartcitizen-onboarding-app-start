/**
 * Created by Lucian on 4/1/17.
 */
angular.module('app').controller('landingController', function($scope, scopePayload, AnimationService, $rootScope, $stateParams, $state) {
    $rootScope.lang = $stateParams.lang;
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.index);
    $scope.$parent.segueControl = 'ready';
    $scope.$parent.smartCitizenToggle = '';
    var buttonTargets = [];

    targets(scopePayload);

    function targets(payload){
        if (payload.contextButton1 == "ENGLISH") {
            buttonTargets.push('eng')
        }
        if (payload.contextButton1 == "CASTELLANO") {
            buttonTargets.push('esp')
        }
        if (payload.contextButton1 == "CATALÁ") {
            buttonTargets.push('cat')
        }


        if (payload.contextButton2 == "ENGLISH") {
            buttonTargets.push('eng')
        }
        if (payload.contextButton2 == "CASTELLANO") {
            buttonTargets.push('esp')
        }
        if (payload.contextButton2 == "CATALÁ") {
            buttonTargets.push('cat')
        }
    }

    $scope.languageChangeSegue = function(val){
        $state.go('wizard.making_sense', {lang: buttonTargets[val]});
    }
});