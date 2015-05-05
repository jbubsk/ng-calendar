"use strict";

var angular = require('angular'),
    ngModule, modules = [];

function addDependency(name, isRequire) {
    if (isRequire) {
        require(name);
    }
    modules.push(name);
}

addDependency(require('angular-ui-router'), false);

ngModule = angular.module('application', modules);