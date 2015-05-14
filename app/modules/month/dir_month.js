"use strict";

function SmallDay($state) {
    return {
        restriction: 'A',
        scope: {
            day: '=smallDay'
        },
        templateUrl: 'modules/month/dir_tmpl_smallday.html',
        link: function ($scope) {
            var date = new Date();
            $scope.click = function (day) {
            };
            $scope.tileClass = $scope.day.index ? '' : 'empty';
            $scope.countClass =
                date.getDate() === $scope.day.index &&
                date.getMonth() === parseInt($state.params.month)
                    ?
                    'current' : '';
        }
    }
}
SmallDay.$inject = ["$state"];

module.exports = SmallDay;