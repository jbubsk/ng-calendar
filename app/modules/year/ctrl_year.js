"use strict";

function YearController(AppService) {
    this.startYear = 2015;
    this.months = AppService.getMonths();
}
YearController.$inject = ["AppService"];

module.exports = YearController;