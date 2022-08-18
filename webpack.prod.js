const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");
// const path = require("path")

module.exports = {
  mode: "production", // enabled production mode

  output: {
    clean: true, // Clean and refresh directories after 'npm run build'
    filename: "main.[contenthash].js", // hashes = client -cache
  },

  module: {
    // Rules on array
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
        test: /styles.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },

      {
        test: /\.css$/,
        exclude: /styles.css/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: "file-loader",
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
    minimize: true,
    minimizer: [
      /** click here -->
       *
       * For webpack@5 you can use the `...` syntax to extend existing
       * minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
       *
       * // `...`, [...], {...},
       *
       */
      new CssMinimizer(),
      new Terser(),
    ],
  },

  plugins: [
    new HtmlWebpack({
      title: "My Webpack app",
      template: "./src/index.html",
      // filename: 'index.html',
    }),

    new MiniCssExtract({
      filename: "[name].[fullhash].css",
      ignoreOrder: false,
      // No cache acumulated by clients using fullhash --production
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

/* PRODUCTION MODE (step by step)

Go to your folder project in terminal bash

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
  
  Create a file called babel.config.json
  Then add this line to babel.config.json

  {
  "presets": ["@babel/preset-env"]
}

*/

/* OPTIONAL:

We add JEST to testing, because is simple config and you can this example of testing basic to have already everything configurated for the future, then you can add more tests at the same time

Istall jest as a DEV dependency 


*/
