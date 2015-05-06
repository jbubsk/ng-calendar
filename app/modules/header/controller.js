module.exports = function ($scope) {
    $scope.templateUrl = require('./template.html');

    $scope.navigs = [
        {
            name: 'Year',
            href: 'year'
        },
        {
            name: 'Month',
            href: 'month'
        },
        {
            name: 'Week',
            href: 'week'
        }
    ];
};