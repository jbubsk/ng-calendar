"use strict";

var angular = require('angular'),
    moduleName = 'router',
    uiRouter = require('angular-ui-router');

function RouteConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/year");

    $stateProvider
        .state('pub', {
            abstract: true,
            templateUrl: 'modules/header/tmpl_header.html'
        })
        .state('pub.year', {
            url: "/year",
            templateUrl: 'modules/year/tmpl_year.html'
        })
        .state('pub.month', {
            url: "/month/:year/:month",
            templateUrl: 'modules/month/tmpl_month.html'
        });
}
RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module(moduleName, [uiRouter])
    .config(RouteConfig);

module.exports = moduleName;