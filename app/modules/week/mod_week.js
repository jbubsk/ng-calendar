"use strict";
var moduleName = 'week';

require('angular').module(moduleName ,[])
    .controller('WeekController', require('./ctrl_week'));

module.exports = moduleName;