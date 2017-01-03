'use strict'
app.controller("home", function($scope, details) {
    $scope.selectedAccount = null;
    $scope.accounts = [{
        label: "Select Account",
        value: null
    }, {
        label: "Account 1",
        value: 1
    }, {
        label: "Account 2",
        value: 2
    }, {
        label: "Account 3",
        value: 3
    }];

    $scope.selectAccount = function(id) {
        details.getDetails(id - 1).then(function(res) {
            $scope.acctDetails = res;

        });
    }

    $scope.allowDrop = function(ev) {
        ev.preventDefault();
    }

    $scope.drag = function(ev) {
        ev.dataTransfer.setData("src", ev.target.id);
    }

    $scope.drop = function(ev) {
        ev.preventDefault();
        var src = document.getElementById(ev.dataTransfer.getData("src"));
        var srcParent = src.parentNode;
        var tgt = ev.currentTarget.firstElementChild;
        ev.currentTarget.replaceChild(src, tgt);
        srcParent.appendChild(tgt);
    }
});
