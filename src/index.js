import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Blur from "./Blue";

ReactDOM.render(<Blur />, document.getElementById("root"));

serviceWorker.unregister();
