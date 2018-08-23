export function finalController($scope, $rootScope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);

    $scope.$parent.segueControl ='ready';
    // Maybe we use it for the final slide
}

finalController.$inject = ['$scope', '$rootScope', 'scopePayload', 'AnimationService'];
