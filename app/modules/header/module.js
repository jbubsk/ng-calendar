"use strict";
var moduleName = 'header';

require('angular').module(moduleName, [])
    .controller('HeaderController', require('./controller'))
    .directive('navItems', require('./directive'));

module.exports = moduleName;