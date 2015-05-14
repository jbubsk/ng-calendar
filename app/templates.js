"use strict";

var angular = require('angular'),
    moduleName = 'templates';

angular.module(moduleName, []);

require('./modules/header/tmpl_header.html');
require('./modules/year/tmpl_year.html');
require('./modules/year/dir_tmpl_smallmonth.html');
require('./modules/month/tmpl_month.html');
require('./modules/month/dir_tmpl_smallday.html');

module.exports = moduleName;