"use strict";
var moduleName = 'router',
    uiRouter = require('angular-ui-router');

require('angular').module(moduleName, [uiRouter])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/year");

        $stateProvider
            .state('pub', {
                abstract: true,
                templateUrl: require('./modules/header/template.html')
            })
            .state('pub.year', {
                url: "/year",
                templateUrl: require('./modules/year/template.html')
            })
            .state('pub.month', {
                url: "/month?year&month&",
                templateUrl: require('./modules/month/template.html')
            })
            .state('pub.week', {
                url: "/week",
                templateUrl: require('./modules/week/template.html')
            });
    });


module.exports = moduleName;