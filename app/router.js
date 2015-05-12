"use strict";
var moduleName = 'router',
    uiRouter = require('angular-ui-router');

function RouteConfig($stateProvider, $urlRouterProvider) {

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
}
RouteConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

require('angular').module(moduleName, [uiRouter])
    .config(RouteConfig);


module.exports = moduleName;