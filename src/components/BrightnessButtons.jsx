import React from "react";
import {useDispatch} from "react-redux";
import {decreaseBrightness, increaseBrightness} from "../store/actions/lampActions";
import '../style/controlButtons.css';

const BrightnessButtons = () => {

    const dispatch = useDispatch();

    const decreaseHandler = () => {
        dispatch(decreaseBrightness());
    }

    const increaseHandler = () => {
        dispatch((increaseBrightness()));
    }

    return (
        <div className="control__brightness">
            <button id="decreaseButton" onClick={decreaseHandler}>-</button>
            <button id="increaseButton" onClick={increaseHandler}>+</button>
        </div>
    )
}

export default BrightnessButtons;