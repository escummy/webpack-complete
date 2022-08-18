// Plugins
const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const path = require("path");

module.exports = {
  // 'development mode'| 'production mode' | 'none'
  mode: "development", // enabled useful tools for development

  output: {
    clean: true, // Clean and refresh directories before 'npm run build'
  },

  module: {
    // Array
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false, // Disables attributes processing
          minimize: false, // Minimize by default
        },
      },

      {
        test: /\.css$/,
        exclude: /styles.css/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
      },
    ],
  },

  // Array
  plugins: [
    new HtmlWebpack({
      title: "My Webpack app",
      template: "./src/index.html",
      // filename: 'index.html',
      // By default a template html
    }),

    new MiniCssExtract({
      filename: "[name].css",
      ignoreOrder: false,
      // No cache acumulated by clients using hashes --production
      // filename: "styles.[fullhash].css",
    }),

    new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
        // { from: "source", to: "assets" },
        // { from: "other", to: "public" },
      ],
    }),
  ],
};

/* 

Building webpack STEP BY STEP ?! 

//  npm run build ---> Each time this refresh/save code in the main.js

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
    "dev": "webpack --config webpack.config.js",
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --config webpack.config.js --open --port=8080"
  },

  // To start server run in terminal --->  npm run serve
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

  // const MiniCssExtract = require("mini-css-extract-plugin");

  Include this code inside rules array as a new rule module

      {
        test: /\.css$/i,
        exclude: /styles.css/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /styles.css$/i,
        use: [MiniCssExtract.loader, "css-loader"],
      },

  And add a new plugin in plugins inside the array

    new MiniCssExtract({
      filename: "[name].[fullhash].css",
      ignoreOrder: false,
    }),


  Now you can run in terminal without errors, if not you can pay attention to errors and repeat this command after solve:

    npm run dev
    npm run start

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

  // Imports used in React and other frameworks 
  
  (Option 1) - Import in components.js
  import webpackLogo from '../assets/img/webpack-logo.png'

  (Option 2) - Import in the root of styles.css

  https://webpack.js.org/plugins/copy-webpack-plugin/
  npm install copy-webpack-plugin --save-dev

  Add a const of the plugin
  // const CopyPlugin = require("copy-webpack-plugin");

  Import image in the HTML document
  //  <img src="assets/img/webpack-logo.png" alt="Webpack logo">
  
  Add this plugin with the others in webpack.config.js 

  new CopyPlugin({
      patterns: [
        { from: "source", to: "dest" },
        { from: "other", to: "public" },
      ],
    }),

  Now you can run in terminal without errors, if not you can pay attention to errors and repeat this command after solve:

    npm run dev
    npm run start

  */

// PRODUCTION MODE.... Continue instructions in webpack.prod.js file
