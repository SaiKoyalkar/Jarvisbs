'use strict'
app.controller("modal-ctrl", function($scope, $uibModalInstance, secureUser) {

  var $ctrl = this;
//  $scope.secureUser = !secureUser;

  $scope.loginBtn = function(){
    $scope.secureUser = true
    $uibModalInstance.close($scope.secureUser);
  }

    $scope.ok = function() {
        $uibModalInstance.close();
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});
