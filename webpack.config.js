const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const path = require("path")

module.exports = {
  mode: "production", // enabled production mode bu default
  devtool: "source-map",
  output: {
    clean: true, // Clean and refresh directories after 'npm run build'
    filename: "main.[contenthash].js", // hashes - client cache
  },

  module: {
    // Rules on array
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false, // Disables attributes processing
          minimize: false, // Minimize by default
        },
      },

      {
        test: /\.css|scss$/i,
        exclude: /styles.css/i,
        use: ["style-loader", "css-loader", 'sass-loader'],
      },

      {
        test: /styles.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(png|jpe?g|woff(2)|eot|ttf|svg|gif)$/,
        loader: "file-loader",
        // type: "asset/inline",
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  optimization: {
    // [...]
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line

      // `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "My Webpack app name",
      template: "./src/index.html",
      filename: "index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
      ignoreOrder: false,
      // No cache acumulated by clients using fullhash in production
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
        // { from: "source", to: "assets" },
        // { from: "other", to: "public" },
      ],
    }),
  ],
};

/* Building webpack step by step ?! 

  // npm run build ---> Each time this refresh/save code in the main.js

  https://webpack.js.org/loaders/html-loader/
  https://webpack.js.org/plugins/html-webpack-plugin/

  // Run in terminal ---> npm install --save-dev html-loader
  // Run in terminal ---> npm install --save-dev html-webpack-plugin

  Then check if was installed in the package.json

  "devDependencies": {
    "html-loader": "^4.1.0",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0"


  DevServer
  https://webpack.js.org/configuration/dev-server/

  'npm install --save-dev webpack-dev-server'
  // Run shorthand in terminal ---> npm i -D webpack-dev-server

  Here you set the package.json scripts to create new npm/yarn commands

      "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "start": "webpack-dev-server --mode=development --open",
    "build": "webpack --config webpack.config.js",
  },

  // To start server run in terminal --->  npm run dev
  // If you want to stop server ---> Ctrl + C

  Install css-loaderstyle.loader
  https://webpack.js.org/loaders/style-loader/

  Install style.loader
  https://webpack.js.org/loaders/css-loader/

  // Run in terminal ---> npm install --save-dev style-loader css-loader
  // Run in terminal ---> npm install --save-dev mini-css-extract-plugin

  Import in the index.js...

  import './styles.css';
  import './js/components';

  Install mini CSS extractor
  https://webpack.js.org/plugins/mini-css-extract-plugin/
  
  // Run in terminal ---> npm install --save-dev mini-css-extract-plugin

  Add this constant on the top of webpack.config.js

  // const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  Include this code inside rules array as a new rule module

      {
        test: /\.css$/i,
        exclude: /styles.css/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /styles.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
      ignoreOrder: false,
    }),


  Now you can run in terminal without errors:

    npm run dev
    npm run build

  Create a folder called 'assets' inside /src folder
  Create a folder called 'img' inside /assets folder
  We put a webpack picture in the /img/webpack-logo.png

  Install 'file-loader'
  https://v4.webpack.js.org/loaders/file-loader/

  // Run in terminal ---> npm install file-loader --save-dev
  
  
  Import in JS files './file.js'...
  // import image from './file.png'

  Add this line of code in webpack.config.js

      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },

  Then we set a width of 150px in styles.css file

  img {
    width: 150px
  }

  // Import types: used as React and other frameworks 
  
  (Option 1) - Import in components.js
  import webpackLogo from '../assets/img/webpack-logo.png'

  (Option 2) - Import in the root of styles.css

  https://webpack.js.org/plugins/copy-webpack-plugin/
  npm install copy-webpack-plugin --save-dev

  Add a const of the plugin
  // const CopyWebpackPlugin = require("copy-webpack-plugin");

  Import image in the HTML document
  //  <img src="assets/img/webpack-logo.png" alt="Webpack logo">
  
  Add this plugin with the others in webpack.config.js 

  new CopyWebpackPlugin({
      patterns: [
        { from: "source", to: "dest" },
        { from: "other", to: "public" },
      ],
    }),

  Now you can run in terminal without errors, if not you can pay attention to errors and repeat this command after solve:

    npm run dev
    npm run build

  */

/* PRODUCTION MODE 

Install Css minimizer plugin
https://webpack.js.org/plugins/css-minimizer-webpack-plugin/

// Run in terminal ---> npm install css-minimizer-webpack-plugin --save-dev

Install terser plugin 
https://webpack.js.org/plugins/terser-webpack-plugin/

// Run in terminal ---> npm install terser-webpack-plugin --save-dev

Install BABEl.js in production mode only
https://babeljs.io/setup#installation

// Run in terminal ---> npm install --save-dev babel-loader @babel/core

Install preset-ENV to expand babel in the future

// run in terminal --> npm install @babel/preset-env --save-dev

Add this code inside rules in webpack.prod.js

  {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
  
  Create a file with dot called .babelrc
  Then add this line to .babelrc

  {
  "presets": ["@babel/preset-env"]
}

*/
