"use strict";

var angular = require('angular'),
    dependencies = require('./initializer').modules,
    config = require('config');

function AppConfig($logProvider, $provide) {
    $logProvider.debugEnabled(config.env === 'development');

    $provide.decorator('$log', require('./logger_decorator'))
}

angular.module('application', dependencies)
    .config(AppConfig)
    .service('AppService', require('./service'));