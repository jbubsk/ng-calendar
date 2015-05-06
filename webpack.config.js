var webpack = require('webpack'),
    path = require('path'),
    node_dir = __dirname + '/node_modules';

var utils = {
    getEntryApp: function () {
        return process.env.NODE_ENV === 'production' ?
            ['./app/index.js'] :
            ['webpack/hot/dev-server', './app/index.js'];
    },

    getOutputDir: function () {
        return process.env.NODE_ENV === 'production' ? './dist' : './app'
    }
};

var config = {
    entry: {
        app: utils.getEntryApp(),
        vendors: ['angular', 'angular-ui-router']
    },
    resolve: {
        alias: {
            'styles': '../styles/styles.scss'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    output: {
        path: utils.getOutputDir(),
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.html$/,
                loader: "ngtemplate?relativeTo=" + (path.resolve(__dirname, './app')) + "!html"
            },

            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },

            {
                test: 'include regexp',
                loader: "file-loader?name=index.html"
            }
        ]
    },
    addVendor: function (name, path) {
        if (path) {
            this.resolve.alias[name] = path;
        }
        this.module.noParse.push(new RegExp('^' + name + '$'));
    }
};

config.addVendor('angular');
config.addVendor('angular-ui-router');

console.log(config.resolve);

module.exports = config;