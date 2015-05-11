module.exports = function ($state) {
    return {
        restriction: 'A',
        scope: {
            day: '=smallDay'
        },
        templateUrl: require('./dir_tmpl_smallday.html'),
        link: function ($scope) {
            var date = new Date();
            $scope.click = function (day) {
                /*$state.go('pub.week', {
                 year: $scope.year,
                 month: day.index,
                 week: ''
                 });*/
            };
            $scope.tileClass = $scope.day.index ? '' : 'empty';
            $scope.countClass =
                date.getDate() === $scope.day.index &&
                date.getMonth() === parseInt($state.params.month)
                    ?
                    'current' : '';
        }
    }
};