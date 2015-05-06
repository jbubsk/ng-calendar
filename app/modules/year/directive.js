var angular = require('angular');

angular.module('year')
    .directive('smallMonth', function () {
        return {
            restriction: 'A',
            replace: true,
            scope: {
                month: '=smallMonth'
            },
            controller: function ($scope, $state) {
                $scope.click = function (month) {
                    $state.go('month', {index: month.index});
                }
            },
            templateUrl: require('./dir-smallMonth.html'),
            link: function ($scope) {
                $scope.days = new Date(2015, $scope.month.index, 0).getDate();
                $scope.classs = new Date().getMonth() === $scope.month.index ? 'current' : '';
            }
        }
    });