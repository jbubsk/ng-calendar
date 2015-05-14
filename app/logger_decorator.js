"use strict";

var angular = require('angular');

function LoggerDecorator($delegate) {
    var debug = $delegate.debug;

    $delegate.debug_ext = function (args) {
        var handledText = '',
            originMsg;

        if (angular.isObject(args)) {
            originMsg = JSON.stringify(args)
                .replace(/{/g, '')
                .replace(/}/g, '')
                .split(',');

            angular.forEach(originMsg, function (item) {
                var entry = item.split(':');
                handledText += entry[0].replace(/'/g, '').replace(/"/g, '') + ': ' + entry[1] + '\n';
            });
        } else {
            handledText += args + '\n';
        }
        args.date = new Date();
        debug(handledText);
    };
    return $delegate;
}
LoggerDecorator.$inject = ['$delegate'];

module.exports = LoggerDecorator;