import React from "react";
import "../components/styles/Errors.css";
import NotFoundImg from "../images/404.png";

const NotFound = () => (
  <div className="text-center">
    <h1 className="text-center">Error: 404 Page Not Found</h1>
    <img src={NotFoundImg} alt="404 Not Found" className="Error_Image" />
  </div>
);
export default NotFound;
