import React from "react";
import '../style/controlButtons.css'

const BrightnessButtons = ({decreaseHandler, increaseHandler}) => {


    return(
        <div className="control__brightness">
            <button id="decreaseButton" onClick={decreaseHandler}>-</button>
            <button id="increaseButton" onClick={increaseHandler}>+</button>
        </div>
    )
}

export default BrightnessButtons;