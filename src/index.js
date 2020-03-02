import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Page from "./Page";

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map(number => <li>{number * 2}</li>);

ReactDOM.render(<ul> {listItems}</ul>, document.getElementById("root"));

serviceWorker.unregister();
