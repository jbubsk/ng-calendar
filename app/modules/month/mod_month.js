"use strict";

var moduleName = 'month';

require('angular').module(moduleName, [])
    .controller('MonthController', require('./ctrl_month'))
    .directive('smallDay', require('./dir_month'));

module.exports = moduleName;