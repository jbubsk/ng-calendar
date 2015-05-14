"use strict";

var angular = require('angular'),
    dependencies = require('./initializer').modules,
    config = require('config'),
    LoggerDecorator = require('./logger_decorator'),
    AppService = require('./service');

function AppConfig($logProvider, $provide) {
    $logProvider.debugEnabled(config.env === 'development');

    $provide.decorator('$log', LoggerDecorator)
}
AppConfig.$inject = ['$logProvider', '$provide'];

angular.module('application', dependencies)
    .config(AppConfig)
    .service('AppService', AppService);