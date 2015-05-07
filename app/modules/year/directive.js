module.exports = function ($state) {
    return {
        restriction: 'A',
        replace: true,
        scope: {
            month: '=smallMonth',
            year: '@'
        },
        templateUrl: require('./dir-smallMonth.html'),
        link: function ($scope) {
            $scope.click = function (month) {
                $state.go('pub.month', {
                    year: $scope.year,
                    month: month.index
                });
            };
            $scope.days = new Date(2015, $scope.month.index, 0).getDate();
            $scope.classs = new Date().getMonth() === $scope.month.index ? 'current' : '';
        }
    }
};