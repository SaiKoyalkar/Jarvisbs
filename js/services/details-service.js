'use strict'

app.factory("details", function($http, $q) {
    return {
        getDetails: function(req) {
            var deferred = $q.defer();

            var details = [{
                acctNumber: 876868876,
                acctName: "Account 1",
                currency: "DKK",
                balInfo: [{
                    date: "01/10/2016",
                    desc: "ATM",
                    amt: "4889"
                }, {
                    date: "02/10/2016",
                    desc: "Interest",
                    amt: "88"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }]
            }, {
                acctNumber: 098098876,
                acctName: "Account 2",
                currency: "DKK",
                balInfo: [{
                    date: "01/10/2016",
                    desc: "ATM",
                    amt: "4889"
                }, {
                    date: "02/10/2016",
                    desc: "Interest",
                    amt: "88"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }]
            }, {
                acctNumber: 76787687,
                acctName: "Account 3",
                currency: "DKK",
                balInfo: [{
                    date: "01/10/2016",
                    desc: "ATM",
                    amt: "4889"
                }, {
                    date: "02/10/2016",
                    desc: "Interest",
                    amt: "88"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }, {
                    date: "04/10/2016",
                    desc: "ATM",
                    amt: "879"
                }]
            }, ];
            deferred.resolve(details[req]);
            return deferred.promise;
        }
    }
});
