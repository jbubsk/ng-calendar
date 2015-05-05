"use strict";

function initApp() {
    var angular = require('angular'),
        modules = [];

    modules.push(require('./router'));
    modules.push(require('./modules/year/module'));
    modules.push(require('./modules/month/module'));
    modules.push(require('./modules/week/module'));

    angular.module('application', modules);
}

initApp();

if (module.hot) {
    module.hot.accept(initApp);
}