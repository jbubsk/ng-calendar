"use strict";
var modules = [];

function createModule(name) {
    modules.push(name);
}

require('angular-ui-router');
createModule(require('./router'));
createModule(require('./modules/header/module'));
createModule(require('./modules/year/module'));
createModule(require('./modules/month/module'));
createModule(require('./modules/week/module'));

module.exports = {
    modules: modules
};