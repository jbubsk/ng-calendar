"use strict";
var moduleName = 'week';

require('angular').module(moduleName ,[])
    .controller('WeekController', require('./controller'));

module.exports = moduleName;