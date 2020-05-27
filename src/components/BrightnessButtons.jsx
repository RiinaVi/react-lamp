import React from "react";
import '../style/controlButtons.css'
import {useDispatch, useSelector} from "react-redux";
import {getEnabled} from "../store/selectors/lampSelectors";
import {decreaseBrightness, increaseBrightness} from "../store/actions/lampActions";

const BrightnessButtons = () => {

    const dispatch = useDispatch();
    const enabled = useSelector(getEnabled);

    const decreaseHandler = () => {
        if(!enabled) return;
        dispatch(decreaseBrightness())
    }

    const increaseHandler = () => {
        if(!enabled) return;
        dispatch((increaseBrightness()))
    }


    return(
        <div className="control__brightness">
            <button id="decreaseButton" onClick={decreaseHandler}>-</button>
            <button id="increaseButton" onClick={increaseHandler}>+</button>
        </div>
    )
}

export default BrightnessButtons;