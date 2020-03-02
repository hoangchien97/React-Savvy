import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import CustomTextInput from "./CustomTextInput";

ReactDOM.render(<CustomTextInput />, document.getElementById("root"));

serviceWorker.unregister();
