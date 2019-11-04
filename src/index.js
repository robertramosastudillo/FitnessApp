// Javascript Vanilla

// const element = document.createElement("h1");
// element.innerText = "Hello React...";
// const container = document.getElementById("root");
// container.appendChild(element);

// React

import React from "react";
import ReactDOM from "react-dom";

const user = {
  firstName: "Robert",
  lastName: "Ramos",
  avatar:
    "https://i.pinimg.com/originals/39/5a/91/395a91db78d3fe72c3a8f944877010db.jpg"
};

function getName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello {getName(user)}</h1>;
  }
  return <h1>Hello Stranger</h1>;
}

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
);

const container = document.getElementById("root");

// ReactDOM.render(QUE ELEMENTO, DONDE);
ReactDOM.render(element, container);
