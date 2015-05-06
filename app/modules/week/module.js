"use strict";
var angular = require('angular'),
    moduleName = 'week';

angular.module(moduleName)
    .controller('WeekController', function ($scope) {
        $scope.greeting = 'Scope from Week :)';
    });

module.exports = moduleName;