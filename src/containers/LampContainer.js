import React from "react";
import Lamp from "../components/Lamp";
import {useSelector} from "react-redux";
import {getBrightness, getMode} from "../store/selectors/lampSelectors";
import {COLORS} from "../store/constants/states";

const LampContainer = () => {
    const brightness = useSelector(getBrightness);
    const lampMode = useSelector(getMode)
    let lightColor;


    switch (lampMode) {
        case 0:
            lightColor = COLORS.WHITE;
            break;
        case 1:
            lightColor = COLORS.YELLOW;
            break;
        case 2:
            lightColor = COLORS.NONE;
            break;
        default:
            break;
    }

    return(
        <Lamp lightColor={lightColor} brightness={brightness}/>
    )
}

export default LampContainer;