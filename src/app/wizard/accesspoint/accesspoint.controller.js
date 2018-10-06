export function accesspointController($scope, scopePayload, AnimationService, $rootScope, platform, $state, $interval, $timeout, $stateParams) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'blocked';
    $scope.$parent.disabled = true;

    $scope.payload.promptedText = $scope.submittedData.deviceData.device_token;

    platform.listenToken($scope.submittedData.deviceData.device_token, $scope);

    $scope.$on('token', function (e, data) {
        prepSegue();
    });

    $scope.watchDog = $timeout(function() {
        prepSegue();
        $rootScope.$broadcast('forceSegue', { target: 'wizard.ap_issues', params: {lang: $stateParams.lang}});
    }, $scope.$parent.apModeWatchDog);

    function prepSegue() {
        $timeout.cancel($scope.watchDog);
        $scope.$parent.disabled = false;
        $rootScope.$broadcast('forceSegue', { target: 'wizard.confirm_handshake', params: {lang: $stateParams.lang}});
    }
}

accesspointController.$inject = ['$scope', 'scopePayload', 'AnimationService', '$rootScope', 'platform', '$state', '$interval', '$timeout', '$stateParams'];

export function accesspointController_base($scope, $stateParams, scopePayload, AnimationService, $rootScope, $sce) {
    $rootScope.lang = $stateParams.lang;
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';

    if ($scope.$parent.payload.url == "accesspoint_1") {
        $scope.bindable = $sce.trustAsHtml($scope.$parent.payload.h3_1 + "<em class=blue>" + $scope.$parent.payload.em_1 + "</em>" + $scope.$parent.payload.h3_2 + "<em class=blue>" + $scope.$parent.payload.em_2 + "</em>" + $scope.$parent.payload.h3_3);
    } else if ($scope.$parent.payload.url == "accesspoint_2") {
        $scope.bindable = $sce.trustAsHtml($scope.$parent.payload.h3_1 + "<em class=blue>" + $scope.$parent.payload.em_1 + "</em>");
    }
}

accesspointController_base.$inject = ['$scope', '$stateParams', 'scopePayload', 'AnimationService', '$rootScope', '$sce'];
