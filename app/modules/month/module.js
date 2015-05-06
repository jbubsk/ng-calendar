"use strict";
var moduleName = 'month';

require('angular').module(moduleName, [])
    .controller('MonthController', require('./controller'))
    .directive('smallDay', require('./directive'));

module.exports = moduleName;