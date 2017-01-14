'use strict'
app.controller("home", function($scope, $uibModal) {
    $scope.openLogin = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'loginContent.html',
            controller: 'modal-ctrl',
            size: 'sm'
        });
        modalInstance.result.then(function() {
        }, function() {});
    };

    $scope.openRegister = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'registerContent.html',
            controller: 'modal-ctrl',
            size: 'md'
        });
        modalInstance.result.then(function() {
        }, function() {});
    };
});
