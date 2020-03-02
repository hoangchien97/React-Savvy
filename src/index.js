import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Login from "./Login";

ReactDOM.render(<Login />, document.getElementById("root"));

serviceWorker.unregister();
