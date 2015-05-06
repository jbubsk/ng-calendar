module.exports = function ($scope, $state, AppService) {
    var monthIndex = parseInt($state.params.month);

    $scope.month = {
        name: AppService.getMonthName(monthIndex)
    };
    $scope.days = AppService.getDaysForMonth(monthIndex);
};