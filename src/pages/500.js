import React from "react";
import "../components/styles/Errors.css";
import FatalErrorImg from "../images/500.png";

const FatalError = () => (
  <div className="text-center">
    <h1 className="text-center">Error: 500 Page Unexpected Error</h1>
    <img
      src={FatalErrorImg}
      alt="500 Unexpected Error"
      className="Error_Image"
    />
  </div>
);
export default FatalError;
