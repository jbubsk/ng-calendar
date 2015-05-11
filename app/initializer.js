"use strict";
var modules = [];

modules.push(require('./router'));
modules.push(require('./modules/header/mod_header'));
modules.push(require('./modules/year/mod_year'));
modules.push(require('./modules/month/mod_month'));

module.exports = {
    modules: modules
};