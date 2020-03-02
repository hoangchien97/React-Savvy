import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Toggle from "./Toggle";
import LoggingButton from "./LoggingButton";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<Toggle />, document.getElementById("root"));
ReactDOM.render(<LoggingButton />, document.getElementById("root"));

serviceWorker.unregister();
