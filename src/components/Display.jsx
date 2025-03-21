import React from "react";
import Style from "./Display.module.css";

function Display({ calVal }) {
  return (
    <input className={Style.display} value={calVal} readOnly type="text" />
  );
}

export default Display;
