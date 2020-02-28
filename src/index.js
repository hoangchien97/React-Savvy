import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// C1 : trong component

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById("root"));

// C2 pass prop by export/import component

ReactDOM.render(
  <HelloWorld title="I'm a Viet Nam" />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
