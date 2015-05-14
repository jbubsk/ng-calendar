var path = require('path');

var appRoot = './app/';

module.exports = {
    root: appRoot,
    src: {
        app: appRoot + 'index.js',
        js: appRoot + '**/*.js',
        html: appRoot + 'index.html',
        all_html: appRoot + 'modules/**/*.html',
        scss: './styles/*.scss'
    },
    bower: './bower_components/',
    dest: {
        app: 'app.js',
        lib: 'libraries.js',
        style: 'style.css'
    },
    dist: './dist/'
};