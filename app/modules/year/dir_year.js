module.exports = function ($state, AppService) {
    return {
        restriction: 'A',
        replace: true,
        scope: {
            month: '=smallMonth',
            year: '@'
        },
        templateUrl: require('./dir_tmpl_smallmonth.html'),
        link: function ($scope) {
            $scope.click = function (month) {
                $state.go('pub.month', {
                    year: $scope.year,
                    month: month.index
                });
            };
            $scope.days = AppService.getNumberDaysOfMonth(2015, $scope.month.index);
            $scope.classs = new Date().getMonth() === $scope.month.index ? 'current' : '';
        }
    }
};