"use strict";

function HeaderController($state, AppService) {
    this.navigs = [
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
        },
        this.click = function () {
            $state.go('pub.month', AppService.getCurrentDate());
        }
    ];
}
HeaderController.$inject = ["$state", "AppService"];

module.exports = HeaderController;