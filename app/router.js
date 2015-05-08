"use strict";
var moduleName = 'router',
    uiRouter = require('angular-ui-router');

require('angular').module(moduleName, [uiRouter])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/year");

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
            })
            .state('pub.week', {
                url: "/week",
                templateUrl: require('./modules/week/tmpl_week.html')
            });
    });


module.exports = moduleName;