import "../css/components.css";

// Imports -option 1- used in React and others frameworks
import webpackLogo from "../assets/img/webpack-logo.png";

export const greet = (user) => {
  // Arrow function greet() to import giving access we use 'export'
  // console.log("Creating a tag h1");

  // Dom text -import option 1-
  const h1 = document.createElement("h1");
  h1.innerText = `Welcome from the ${user}!`;
  document.body.append(h1);

  // Dom img -import option 1-
  const img = document.createElement("img");
  img.src = webpackLogo;
  document.body.append(img);
};


// TEST