"use strict";
var angular = require('angular'),
    moduleName = 'week';

angular.module(moduleName, [])
    .controller('WeekController', function ($scope) {
        $scope.greeting = 'Hello! Week!';
    });

module.exports = moduleName;