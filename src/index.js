import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Toggle from "./Toggle";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Toggle />, document.getElementById("root"));

serviceWorker.unregister();
