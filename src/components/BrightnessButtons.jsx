import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { lampState } from '../store/atoms/lampState';
import { BRIGHTNESS_STATES } from '../store/constants/states';
import { getBrightness, getEnabled } from '../store/selectors/lampSelectors';

import '../style/controlButtons.css';

const BrightnessButtons = () => {
    const enabled = useRecoilValue(getEnabled);
    const brightness = useRecoilValue(getBrightness);
    const setLampState = useSetRecoilState(lampState);
    
    const decreaseHandler = () => {
        if (!enabled) return;
        setLampState((prev) => ({
            ...prev, brightness: Math.max(BRIGHTNESS_STATES.MIN_BRIGHTNESS,
              Number((brightness - BRIGHTNESS_STATES.STEP).toFixed(1)))
        }))
    }
    
    const increaseHandler = () => {
        if (!enabled) return;
        setLampState((prev) => ({
            ...prev, brightness: Math.min(BRIGHTNESS_STATES.MAX_BRIGHTNESS,
              Number((brightness + BRIGHTNESS_STATES.STEP).toFixed(1)))
        }))
    }

    return (
        <div className="control__brightness">
            <button id="decreaseButton" onClick={decreaseHandler}>-</button>
            <button id="increaseButton" onClick={increaseHandler}>+</button>
        </div>
    )
}

export default BrightnessButtons;
