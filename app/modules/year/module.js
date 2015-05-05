"use strict";
var angular = require('angular'),
    moduleName = 'year';

angular.module(moduleName, [])
    .controller('YearController', function ($scope) {
        $scope.greeting = 'Hello! Year!!!';
    });

module.exports = moduleName;