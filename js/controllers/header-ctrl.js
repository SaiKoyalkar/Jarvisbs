'use strict'
app.controller("header", function($scope, $uibModal) {

  $scope.secureUser = true;
  $scope.status = {
    brands: false,
    marketing: false,
    atsAcademy: false,
    aboutUs: false,
    user:false,
    search: false,
    products: false
 };

    $scope.openLoginRegister = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'LoginRegisterContent.html',
            controller: 'modal-ctrl',
            size: 'lg'
        });
        modalInstance.result.then(function() {
          $scope.secureUser = true;
          $state.go('secureUser');
          $uibModalInstance.close();
        }, function() {});
    };
    $scope.openMenu=function(eve, menu){
      $scope.status.brands = false;
      $scope.status.marketing = false;
      $scope.status.atsAcademy = false;
      $scope.status.aboutUs = false;
      $scope.status.user = false;
      $scope.status.search = false;
      $scope.status.products = false;

      $scope.status[menu]= true;

    }
});
