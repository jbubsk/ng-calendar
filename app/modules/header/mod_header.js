"use strict";

var moduleName = 'header';

require('angular').module(moduleName, [])
    .controller('HeaderController', require('./ctrl_header'))
    .directive('navItems', require('./dir_header'));

module.exports = moduleName;