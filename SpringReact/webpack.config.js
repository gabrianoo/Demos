var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/built');
var APP_DIR = path.resolve(__dirname, 'src/main/js');

var config = {
    entry: APP_DIR + '/app.jsx',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    plugins: ["transform-class-properties"],
                    presets: ["env", "es2015", "react"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
