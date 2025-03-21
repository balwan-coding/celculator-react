import React, { useState } from "react";
import Style from "./Celculator.module.css";
import Display from "./Display";
import ButtonsContainet from "./ButtonsContainet";

function Celculator() {
  const [calVal, setCalVal] = useState("");

  const handleClick = (buttonsName) => {
    let newValue = calVal + buttonsName;
    if (buttonsName === "C") {
      setCalVal("");
    } else if (buttonsName === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal(newValue);
    }
  };
  return (
    <div className={Style.celculator}>
      <Display calVal={calVal} />
      <ButtonsContainet onclick={handleClick} />
    </div>
  );
}

export default Celculator;
