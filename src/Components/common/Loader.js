import React from "react";
import "./common.css";
function Loader() {
  return (
    <div>
      <div className="body">
        <span className="load">
          <span className="load"></span>
          <span className="load"></span>
          <span className="load"></span>
          <span className="load"></span>
        </span>
        <div className="base">
          <span className="load"></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span className="load"></span>
        <span className="load"></span>
        <span className="load"></span>
        <span className="load"></span>
      </div>
      <h3 className="loaderHeading">Redirecting...</h3>
    </div>
  );
}

export default Loader;
