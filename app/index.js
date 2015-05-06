"use strict";

var dependencies = require('./initializer').modules;
require('styles');

function initApp() {
    require('angular').module('application', dependencies)
        .service('AppService', require('./service'));
}

initApp();

if (module.hot) {
    module.hot.accept(initApp);
}
