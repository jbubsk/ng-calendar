var angular = require('angular');

function LoggerDecorator($delegate) {
    var debug = $delegate.debug;

    $delegate.debug_ext = function (args) {
        var handledText = '-- ' + arguments.callee.caller.name + ' --',
            originMsg;

        if (angular.isObject(args)) {
            originMsg = JSON.stringify(args)
                .replace(/{/g, '')
                .replace(/}/g, '')
                .split(',');

            angular.forEach(originMsg, function (item) {
                var entry = item.split(':');
                handledText += '\n\t' + entry[0].replace(/'/g, '').replace(/"/g, '') + ': ' + entry[1];
            });
        } else {
            handledText += '\n\t' + args;
        }
        args.date = new Date();
        debug(handledText);
    };
    return $delegate;
}

module.exports = LoggerDecorator;