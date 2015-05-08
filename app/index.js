"use strict";

var dependencies = require('./initializer').modules;
require('styles');

require('angular').module('application', dependencies)
    .config(function ($logProvider, $provide) {
        $logProvider.debugEnabled(CONFIG.DEBUG);

        $provide.decorator('$log', require('./logger_decorator'))
    })
    .service('AppService', require('./service'));
