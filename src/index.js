import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import FavouriteFlavor from "./FavouriteFlavor";

ReactDOM.render(<FavouriteFlavor />, document.getElementById("root"));

serviceWorker.unregister();
