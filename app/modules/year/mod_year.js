"use strict";
var moduleName = 'year';

require('angular').module(moduleName, [])
    .controller('YearController', require('./ctrl_year'))
    .directive('smallMonth', require('./dir_year'));

module.exports = moduleName;