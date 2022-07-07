import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { lampState } from '../store/atoms/lampState';
import { LAMP_STATES } from '../store/constants/states';
import { getEnabled, getMode } from '../store/selectors/lampSelectors';

import '../style/controlButtons.css';

const RedButton = () => {
    const enabled = useRecoilValue(getEnabled);
    const lampMode = useRecoilValue(getMode);
    const setLampState = useSetRecoilState(lampState);
    
    const toggleModeHandler = () => {
        if (!enabled) return;
        setLampState((prev) => ({
            ...prev,
            mode: LAMP_STATES[lampMode + 1] || LAMP_STATES[0],
        }));
    }

    return (
        <div className="control__button--red">
            <button id="redButton" onClick={toggleModeHandler}/>
        </div>
    )
}

export default RedButton;
