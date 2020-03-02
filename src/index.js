import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Page from "./Page";

ReactDOM.render(<Page />, document.getElementById("root"));

serviceWorker.unregister();
