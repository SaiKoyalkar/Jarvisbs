'use strict'
app.controller("modal-ctrl", function($scope, $uibModalInstance) {

    $scope.ok = function() {
        $uibModalInstance.close();
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});
