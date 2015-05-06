"use strict";
var moduleName = 'router';

require('angular').module(moduleName, ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/year");

        $stateProvider
            .state('year', {
                url: "/year",
                templateUrl: require('./modules/year/template.html'),
                controller: 'YearController'
            })
            .state('month', {
                url: "/month?year&month&",
                templateUrl: require('./modules/month/template.html'),
                controller: 'MonthController'
            })
            .state('week', {
                url: "/week",
                templateUrl: require('./modules/week/template.html'),
                controller: 'WeekController'
            });
    });


module.exports = moduleName;