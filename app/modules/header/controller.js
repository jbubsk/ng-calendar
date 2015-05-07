module.exports = function () {
    this.templateUrl = require('./template.html');

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
        }
    ];
};