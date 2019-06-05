export function accesspointController($scope, scopePayload, AnimationService) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';

}

accesspointController.$inject = ['$scope', 'scopePayload', 'AnimationService'];

export function accesspointController_token($scope, scopePayload, AnimationService) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';

    $scope.payload.promptedText = $scope.submittedData.deviceData.device_token;
}

accesspointController_token.$inject = ['$scope', 'scopePayload', 'AnimationService'];


export function accesspointController_base($scope, $stateParams, scopePayload, AnimationService, $rootScope, $sce, platform, $timeout) {
    $rootScope.lang = $stateParams.lang;
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';

    if ($scope.$parent.payload.url == "accesspoint_1") {
        $scope.bindable = $sce.trustAsHtml($scope.$parent.payload.h3_1 + "<em class=blue>" + $scope.$parent.payload.em_1 + "</em>" + $scope.$parent.payload.h3_2 + "<em class=blue>" + $scope.$parent.payload.em_2 + "</em>" + $scope.$parent.payload.h3_3);
    } else if ($scope.$parent.payload.url == "accesspoint_2") {
        $scope.bindable = $sce.trustAsHtml($scope.$parent.payload.h3_1 + "<em class=blue>" + $scope.$parent.payload.em_1 + "</em>");
    }

    checkHandshake();

    $scope.$parent.watchDog = $timeout(function() {
        prepSegue();
        $rootScope.$broadcast('forceSegue', { target: 'wizard.ap_issues', params: {lang: $stateParams.lang}});
    }, $scope.$parent.apModeWatchDog);

    function recurrentHandshake(){
        $scope.$parent.watchHandshake = $timeout(function() {
            checkHandshake();
        }, 5000);
    }

    function checkHandshake(){
        $timeout.cancel($scope.$parent.watchDog);
        $timeout.cancel($scope.$parent.watchHandshake);
        platform.getDevice().then(function(device){
            if(device.device_handshake == true){
                prepSegue();
            } else {
                recurrentHandshake();
            }
        })
    }

    function prepSegue() {
        $timeout.cancel($scope.watchDog);
        $timeout.cancel($scope.watchHandshake);
        $rootScope.$broadcast('forceSegue', { target: 'wizard.confirm_handshake'});
    }
}

accesspointController_base.$inject = ['$scope', '$stateParams', 'scopePayload', 'AnimationService', '$rootScope', '$sce', 'platform', '$timeout'];

export function accesspointController_final($scope, scopePayload, AnimationService){
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl ='ready';
    $scope.$parent.payload.preventBack = true;

}

accesspointController_final.$inject = ['$scope', 'scopePayload', 'AnimationService'];
