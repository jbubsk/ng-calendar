"use strict";
var modules = [];

modules.push(require('./router'));
modules.push(require('./modules/header/module'));
modules.push(require('./modules/year/module'));
modules.push(require('./modules/month/module'));
modules.push(require('./modules/week/module'));

module.exports = {
    modules: modules
};