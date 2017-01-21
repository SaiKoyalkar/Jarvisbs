'use strict'
app.controller("header", function($scope, $uibModal) {
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
        }, function() {});
    };
});
