import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import CustomTextInput from "./CustomTextInput";
import OuterClick from "./OuterClick";

// ReactDOM.render(<CustomTextInput />, document.getElementById("root"));
ReactDOM.render(<OuterClick />, document.getElementById("root"));

serviceWorker.unregister();
