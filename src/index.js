import { greet } from "./js/components";
import "./styles.css";
import "./js/components";

const user = "DOM";
greet(user);

/* STEP BY STEP to do it manually...

1 - Create a folder names webpack-starter and open in vscode
2 - Open the terminal bash and navigate to webpack-starter

    Run in terminal bash ---> npm init

2 - We create the folders /src

    We create inside /css and /js folders
    We create inside /src the files index.html and index.js
    We create inside /css the file styles.css

3 - We write in the index.html ---> ! + Enter' 

    We import the <script src="index.js"</script> in HTML
    We import the <link rel="stylesheet" href="css/styles.css"> in HTML
    (We need to put it inside the <head></head> tag)
    We create <h1>I am a tittle</h1> and below <div id="app"></div>
    (We need to put it inside the <body></body> tag)

4 - We create a function 'greet' in the index.js
5 - We create a component.js file inside /js folder
    
    We export the arrow function in the component.js 
    We import the arrow function in the index.js

6 -  Open the terminal bash again

https://webpack.js.org/guides/getting-started/

We are going to indicate the use in development environment
Run ---> npm install webpack webpack-cli --save-dev

    Webpack creates a folder node_modules and package-lock.json

    Open the package.json and add an script command script ---> "build": "Webpack";
    Run in the terminal bash ---> npm run build

    A directory was created in ../dir/main.js on your project

    Now we can import/export from the index.HTML with the script below
    <script src="../dir/main.js"</script>

7 - Create a file webpack.config.js on the root of the project
    https://webpack.js.org/configuration/

    Open webpack.config.js file and follow intructions...

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