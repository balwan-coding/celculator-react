import React from "react";
import Style from "./ButtonsContainet.module.css";
import { buttonsName } from "./data/Button";

function ButtonsContainet({ onclick }) {
  return (
    <div className={Style.buttonsContainet}>
      {buttonsName.map((buttonsName) => (
        <button
          key={buttonsName}
          onClick={() => onclick(buttonsName)}
          className={Style.buttons}
        >
          {buttonsName}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainet;
