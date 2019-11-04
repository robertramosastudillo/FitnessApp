// Javascript Vanilla

// const element = document.createElement("h1");
// element.innerText = "Hello React...";
// const container = document.getElementById("root");
// container.appendChild(element);

// React

import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

const container = document.getElementById("root");

// ReactDOM.render(QUE ELEMENTO, DONDE);
ReactDOM.render(<Card />, container);
