import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import FormName from "./FormName";

ReactDOM.render(<FormName />, document.getElementById("root"));

serviceWorker.unregister();
