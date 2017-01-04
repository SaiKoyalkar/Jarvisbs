'use strict'

app.factory("details", function($http, $q) {
    return {
        getDetails: function() {
            var deferred = $q.defer();
            var details = [];
            deferred.resolve(details);
            return deferred.promise;
        }
    }
});
