var webpack = require('webpack'),
    path = require('path'),
    node_dir = __dirname + '/node_modules';

function getEntryApp() {
    return process.env.NODE_ENV === 'production' ?
        ['./index.js'] :
        ['webpack/hot/dev-server', './index.js'];
}

function getOutputDir() {
    return process.env.NODE_ENV === 'production' ?
        path.resolve(__dirname, './dist') :
        path.resolve(__dirname, './build')
}

var config = {
    context: __dirname + '/app',
    entry: {
        app: getEntryApp(),
        vendors: ['angular', 'angular-ui-router']
    },
    resolve: {
        alias: {
            'styles': '../styles/styles.scss'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.html$/,
                loader: "ngtemplate?module=mTemplates&relativeTo=" + (path.resolve(__dirname, './app')) + "!html"
            }
            /*,
             {
             test: /\.html$/,
             loader: "file-loader?name=index.html"
             }*/
        ]
    },
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp('^' + name + '$'));
    }
};

config.addVendor('angular', node_dir + '/angular/angular.min.js');
config.addVendor('ui.router', node_dir + '/angular-ui-router/release/angular-ui-router.min.js');
//config.addVendor('../index.html', __dirname + './app/index.html');

module.exports = config;