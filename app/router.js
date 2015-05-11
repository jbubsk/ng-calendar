"use strict";
var moduleName = 'router',
    uiRouter = require('angular-ui-router');

require('angular').module(moduleName, [uiRouter])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/month");

        $stateProvider
            .state('pub', {
                abstract: true,
                templateUrl: require('./modules/header/tmpl_header.html')
            })
            .state('pub.year', {
                url: "/year",
                templateUrl: require('./modules/year/tmpl_year.html')
            })
            .state('pub.month', {
                url: "/month/:year/:month",
                templateUrl: require('./modules/month/tmpl_month.html')
            });
    });


module.exports = moduleName;