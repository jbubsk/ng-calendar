"use strict";

function SmallMonth($state, AppService) {

    return {
        restriction: 'A',
        replace: true,
        scope: {
            month: '=smallMonth',
            year: '@'
        },
        templateUrl: 'modules/year/dir_tmpl_smallmonth.html',
        link: function ($scope) {
            $scope.click = function (month) {
                $state.go('pub.month', {
                    year: $scope.year,
                    month: month.index
                });
            };
            $scope.days = AppService.getNumberDaysOfMonth(2015, $scope.month.index);
            $scope.monthClass = new Date().getMonth() === $scope.month.index ? 'current' : '';
        }
    }
}
SmallMonth.$inject = ["$state", "AppService"];

module.exports = SmallMonth;