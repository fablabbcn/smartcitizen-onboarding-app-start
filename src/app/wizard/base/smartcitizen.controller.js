export function smartcitizenController($scope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl ='ready';
}

smartcitizenController.$inject = ['$scope', 'scopePayload', 'AnimationService'];
