"use strict";
var angular = require('angular'),
    modules = [];

function createModule(params) {
    var dependencies = [];

    if (params.dependencies) {
        dependencies = params.dependencies;
    }
    angular.module(params.name, dependencies);
    if (params.require) {
        params.require.forEach(function (req) {
            require(req);
        });
    }
    modules.push(params.name);
}

require('angular-ui-router');
createModule({
    name: 'router',
    dependencies: ['ui.router'],
    require: ['./router']
});
createModule({
    name: 'header',
    require: [
        './modules/header/module',
        './modules/header/directive'
    ]
});
createModule({
    name: 'year',
    require: [
        './modules/year/module',
        './modules/year/directive'
    ]
});
createModule({
    name: 'month',
    require: ['./modules/month/module']
});
createModule({
    name: 'week',
    require: ['./modules/week/module']
});

module.exports = {
    modules: modules
};