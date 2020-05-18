import React, {useContext} from "react";
import {ModeContext} from "../providers/ModeProvider";
import '../style/controlButtons.css'

const BrightnessButtons = () => {
    const {decreaseBrightness, increaseBrightness} = useContext(ModeContext);

    return(
        <div className="control__brightness">
            <button id="decreaseButton" onClick={decreaseBrightness}>-</button>
            <button id="increaseButton" onClick={increaseBrightness}>+</button>
        </div>
    )
}

export default BrightnessButtons;