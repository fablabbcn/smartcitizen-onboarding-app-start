export function finalController($scope, $rootScope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl ='ready';

    $scope.payload.preventBack = true;
    $scope.payload.preventForward = true;
    // Maybe we use it for the final slide
}

finalController.$inject = ['$scope', '$rootScope', 'scopePayload', 'AnimationService'];
