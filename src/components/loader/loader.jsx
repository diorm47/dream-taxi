import React from "react";
import "./loader.css";
import loader_gif from "../../assets/loader.gif";

function Loader() {
  return (
    <div className="loader_wrapper">
      <img src={loader_gif} alt="Loading GIF" />
    </div>
  );
}

export default Loader;
