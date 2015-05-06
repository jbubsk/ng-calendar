"use strict";
var angular = require('angular'),
    moduleName = 'month';

angular.module(moduleName)
    .controller('MonthController', function ($scope) {
        $scope.days = [
            {name: 'January'},
            {name: 'February'},
            {name: 'March'},
            {name: 'April'},
            {name: 'May'},
            {name: 'June'},
            {name: 'July'},
            {name: 'August'},
            {name: 'September'},
            {name: 'October'},
            {name: 'November'},
            {name: 'December'}
        ];
    });

module.exports = moduleName;