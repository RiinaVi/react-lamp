import React from "react";
import '../style/lamp.css'
import {useSelector} from "react-redux";
import {getBrightness, getMode} from "../store/selectors/lampSelectors";
import {COLORS} from "../store/constants/states";

const Lamp = () => {
    const brightness = useSelector(getBrightness);
    const lampMode = useSelector(getMode)
    const lightColor = COLORS[lampMode];

    return (
        <div className="lamp">
            <div className="lamp__bulb"/>
            <div className="lamp__stem"/>
            <div className="lamp__basis"/>
            <div className="lamp__light"
                 style={{opacity: brightness, backgroundImage: lightColor}}
            />
        </div>
    )
}

export default Lamp;