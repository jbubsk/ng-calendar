"use strict";
var angular = require('angular'),
    moduleName = 'month';

angular.module(moduleName, [])
    .controller('MonthController', function ($scope) {
        $scope.greeting = 'Month!';
    });

module.exports = moduleName;