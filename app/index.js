"use strict";

var dependencies = require('./initializer').modules;
require('styles');

function initApp() {
    require('angular').module('application', dependencies);
}

initApp();

if (module.hot) {
    module.hot.accept(initApp);
}
