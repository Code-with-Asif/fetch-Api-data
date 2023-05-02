import React from "react";
import spinner from "./spinner.gif";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={spinner} alt="gif" />
    </div>
  );
};

export default Loader;
