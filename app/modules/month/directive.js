module.exports = function () {
    return {
        restriction: 'A',
        scope:{
            day: '@smallDay'
        },
        templateUrl: require('./dir-smallDay.html')
    }
};