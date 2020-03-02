import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function ItemNumber(props) {
  return <li>{props.value}</li>;
}

function ListItems(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <ItemNumber key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ListItems numbers={numbers} />,
  document.getElementById("root")
);

serviceWorker.unregister();
