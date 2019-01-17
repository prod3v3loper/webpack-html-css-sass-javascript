/**
 * Webpack
 * 
 * We create here a HTML file with our JavaScript and SASS (CSS) files.
 * End product is in dist folder after build, you have a index.html with inline sourced CSS and JavaScript.
 * Dev Server is ready to Develop in this envoiriment.
 * 
 * One file configuration
 * 
 * @see https://webpack.js.org/guides/getting-started/
 */
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' ); // https://github.com/jantimon/html-webpack-plugin
const CleanWebpackPlugin = require( 'clean-webpack-plugin' ); // https://github.com/johnagan/clean-webpack-plugin
// This we define to use webpack intern features
const webpack = require( 'webpack' );

module.exports = {
    /**
     * MODE
     * @see https://webpack.js.org/guides/development/
     */
    mode: 'development',
    /**
     * ENTRY
     * @see https://webpack.js.org/concepts/#entry
     */
    entry: {
        main: './src/index.js'
    },
    /**
     * DEVTOOL
     * @see https://webpack.js.org/configuration/devtool/
     */
    devtool: 'inline-source-map',
    /**
     * DEVSERVER
     * @see https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        contentBase: './dist',
        // https://webpack.js.org/guides/hot-module-replacement/
        hot: true
    },
    /**
     * MODULE
     * @see https://webpack.js.org/concepts/modules/
     */
    module: {
        /**
         * @see https://webpack.js.org/concepts/#loaders
         */
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    // Chain the rules to seperate
                    // If sass not exists get css
                    {
                        // https://webpack.js.org/loaders/style-loader/
                        loader: 'style-loader',
                        // use when css not import in javascript
                        // options: {
                        //     insertAt: 'top', // Insert style tag at top of <head>
                        //     singleton: true, // this is for wrap all your style in just one style tag
                        // }
                    },
                    {
                        // https://webpack.js.org/loaders/css-loader/
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        // https://webpack.js.org/loaders/sass-loader/
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    /**
     * PLUGINS
     * @see https://webpack.js.org/concepts/#plugins
     */
    plugins: [
        new CleanWebpackPlugin( ['dist'] ),
        new HtmlWebpackPlugin( {
            title: 'WebPack - HTML, JavaScript & SASS',
            template: 'public/index.html',
            filename: 'index.html',
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        } ),
        new webpack.HotModuleReplacementPlugin(),
    ],
    /**
     * RESOLVE
     * @see https://webpack.js.org/configuration/resolve/#resolve-extensions
     */
    resolve: {
        /**
         * EXTENSIONS
         * @see https://webpack.js.org/configuration/resolve/#resolve-extensions
         */
        extensions: ['.js']
    },
    /**
     * OUTPUT
     * @see https://webpack.js.org/concepts/#output
     */
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].bundle.js',
    }
};