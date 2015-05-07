module.exports = function ($state, AppService) {
    var monthIndex = parseInt($state.params.month);

    this.period = {
        month: AppService.getMonthName(monthIndex),
        year: $state.params.year
    };
    this.days = AppService.getDaysForMonth(monthIndex);
};