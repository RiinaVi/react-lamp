import React, {useCallback} from "react";
import '../style/controlButtons.css'
import {useDispatch, useSelector} from "react-redux";
import {changeBrightness} from "../store/actions/lampActions";
import {getBrightness, getEnabled} from "../store/selectors/lampSelectors";

const BrightnessButtons = () => {

    const dispatch = useDispatch();
    const MIN_BRIGHTNESS = 0.2;
    const MAX_BRIGHTNESS = 1;
    const STEP = 0.1;
    const enabled = useSelector(getEnabled);
    const brightness = useSelector(getBrightness);


    const decreaseHandler = useCallback(()=>{
        if (enabled) {
            if ((brightness) > MIN_BRIGHTNESS) {
                dispatch(changeBrightness(Number((brightness - STEP).toFixed(1))))
            }
        }
    },[dispatch, enabled, brightness])

    const increaseHandler = useCallback(()=>{
        if (enabled) {
            if ((brightness) < MAX_BRIGHTNESS) {
                dispatch(changeBrightness(Number((brightness + STEP).toFixed(1))))
            }
        }
    },[dispatch, enabled, brightness])

    return(
        <div className="control__brightness">
            <button id="decreaseButton" onClick={decreaseHandler}>-</button>
            <button id="increaseButton" onClick={increaseHandler}>+</button>
        </div>
    )
}

export default BrightnessButtons;