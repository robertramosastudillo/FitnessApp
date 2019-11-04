import React from "react";
import "./styles/AddButton.css";
import buttomImg from "../images/add.png";

function AddButton(props) {
  return (
    <a href="/exercise/new">
      <img src={buttomImg} alt="" className="Fitness-Add" />
    </a>
  );
}

export default AddButton;
