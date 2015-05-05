"use strict";

var angular = require('angular'),
    moduleName = 'router';

angular.module(moduleName, [require('angular-ui-router')])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/year");

        $stateProvider
            .state('year', {
                url: "/year",
                templateUrl: require('./modules/year/template.html'),
                controller: 'YearController'
            })
            .state('month', {
                url: "/month",
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