"use strict";

var angular = require('angular'),
    moduleName = 'header';

angular.module(moduleName)
    .controller('HeaderController', function ($scope, $state) {
        $scope.templateUrl = require('./template.html');

        $scope.navigs = [
            {
                name: 'Year',
                href: 'year'
            },
            {
                name: 'Month',
                href: 'month'
            },
            {
                name: 'Week',
                href: 'week'
            }
        ];
    });
module.exports = moduleName;