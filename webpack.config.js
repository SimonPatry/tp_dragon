const  HtmlWebpackPlugin = require("html-webpack-plugin");
// pour créer un chemin absolu pour webpack
const path = require('path'); 

module.exports = {
    // watch: true, // inutile avec le server webpack
    // précise que l'on est en mode développement
    mode : "development",
    // Point d'entrée
    entry: ['babel-polyfill', './app.js' ],
    // Sortie
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    // plugins
    plugins: [new HtmlWebpackPlugin({ template: "./dist/index.html" })],
    // Configuration de webpack-dev-server minimale
    devServer: {
        port : 3000,
        open: true,
        hot : true // reload automatique
    }
}