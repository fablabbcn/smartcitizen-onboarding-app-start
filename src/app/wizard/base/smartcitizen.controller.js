export function smartcitizenController($scope, scopePayload, AnimationService, $state, $stateParams){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl ='ready';

    $scope.skipInstructions = function(){
        $state.go('wizard.choose_connection', {lang: $stateParams.lang});
    }

}

smartcitizenController.$inject = ['$scope', 'scopePayload', 'AnimationService', '$state', '$stateParams'];
