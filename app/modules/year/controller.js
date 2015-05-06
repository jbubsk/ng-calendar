module.exports = function ($scope, AppService) {
    $scope.startYear = 2015;
    $scope.months = AppService.getMonths();
};