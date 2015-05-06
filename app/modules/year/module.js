"use strict";
var moduleName = 'year';

require('angular').module(moduleName, [])
    .controller('YearController', require('./controller'))
    .directive('smallMonth', require('./directive'));

module.exports = moduleName;