"use strict";

function CtrlMonth($log, $state, AppService) {
    var monthIndex = parseInt($state.params.month),
        year = parseInt($state.params.year);

    function setData(year, monthIndex) {
        this.period = {
            month: AppService.getMonthName(monthIndex),
            year: year
        };
        this.days = AppService.getDaysWeeklyStructured(year, monthIndex);
    }

    setData.call(this, year, monthIndex);

    this.back = function back() {
        var _monthIndex = monthIndex > 0 ? monthIndex - 1 : 11,
            _year = _monthIndex === 11 ? year - 1 : year;

        $state.go('pub.month', {
            year: _year,
            month: _monthIndex
        });
    };

    this.forward = function forward() {
        var _monthIndex = monthIndex < 11 ? monthIndex + 1 : 0,
            _year = _monthIndex === 0 ? year + 1 : year;

        $state.go('pub.month', {
            year: _year,
            month: _monthIndex
        });
    }
}
CtrlMonth.$inject = ["$log", "$state", "AppService"];

module.exports = CtrlMonth;