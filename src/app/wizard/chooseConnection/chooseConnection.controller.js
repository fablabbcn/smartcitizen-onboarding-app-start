export function chooseConnectionController($scope, $rootScope, $state, scopePayload, AnimationService, $stateParams){
  console.log(scopePayload)
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);

    $rootScope.lang = $stateParams.lang;

    function setUpSelection(){
        blockSegue();
        $scope.morphControl =['closed'];
        $scope.selectionButtons = ['', '', ''];
        $scope.partButtons = [false,false,false];
    }
    function prepSegue(){
        $scope.$parent.segueControl ='ready';
        $scope.$parent.disabled = false;
        $scope.$parent.errorButton ='';
    }
    function blockSegue(){
        $scope.$parent.disabled = true;
        $scope.$parent.segueControl ='blocked';
    }

    $scope.selectDevice = function(val){
        setUpSelection();
        $scope.selectionButtons[val] = 'active';
        prepSegue();
    };
    $scope.selectLocation = function(val){
        setUpSelection();
        $scope.selectionButtons[val] = 'active';
        prepSegue();
    };


    $scope.selectPart = function(val){

        const activeIndex = $scope.selectionButtons.indexOf('active');
        if (activeIndex > -1 && activeIndex !== val) {
          $scope.selectionButtons[activeIndex] = '';
          $scope.partButtons[activeIndex] = false;
          $scope.selectionButtons[val] = 'active';
          $scope.partButtons[val] = true;
          setNextState(val);
        } else if (activeIndex > -1 && activeIndex === val) {
          $scope.selectionButtons[val] = '';
          $scope.partButtons[val] = false;
          blockSegue();
        } else {
          $scope.selectionButtons[val] = 'active';
          $scope.partButtons[val] = true;
          setNextState(val);
        }
        console.log(val);
    };

    function setNextState(val) {
      switch (val) {
        case 0:
          $scope.$parent.nextState = 'accesspoint_pre';
          prepSegue();
          break;
        case 1:
          $scope.$parent.nextState = 'wifi_enter';
          prepSegue();
          break;
        case 2:
          $scope.$parent.nextState = 'offline_pre';
          prepSegue();
          break;
      }
    }

    function resetter(){
        $scope.payload.segueButton = $scope.payload.continueButton;
        if ($scope.errorState == true){
            $rootScope.$broadcast('removeError');
        }
    }


    $scope.morph = function(val){
        setUpSelection();
        $scope.morphControl[val] = 'open';
    };

    $scope.segueCondition = function(){
        setUpSelection();
        prepSegue();
    };

    setUpSelection();

    /** -- DELEGATE METHODS -- **/
    $scope.$on('blockedSegue', function(){
        for (var i = 0; i < 4; i++){
            if ($scope.selectionButtons[i] == '')
                $scope.selectionButtons[i] = 'error';
        }
        $scope.errorState = true;
    });

    $scope.$on('no', function(){
        resetter();
        blockSegue();
    });

    $scope.infoClick = function(val){
        // TODO modal of descipriont of method
        $scope.$parent.modalBox = 'green';
        var data = [{
            "title": $scope.payload.part1,
            "body": $scope.payload.part1_desc,
            "image": "assets/images/sensor_board.png"
        }, {
            "title": $scope.payload.part2,
            "body": $scope.payload.part2_desc,
            "image": "assets/images/main_board.png"
        }, {
            "title": $scope.payload.part3,
            "body": $scope.payload.part3_desc,
            "image": "assets/images/BOARDS-CUTOUT_0006_BATTERY2.png"
        }];
        data[val].button = $scope.payload.modalButton;
        $scope.$parent.modalContent = data[val];
        $scope.tempBlock = true;
        $rootScope.$broadcast('modal');
    };

}

chooseConnectionController.$inject =  ['$scope', '$rootScope', '$state', 'scopePayload', 'AnimationService', '$stateParams'];
