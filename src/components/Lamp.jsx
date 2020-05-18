import React from "react";
import '../style/lamp.css'
import {useSelector} from "react-redux";
import {getBrightness, getColor} from "../store/selectors/lampSelectors";

const Lamp = () => {
    const brightness = useSelector(getBrightness);
    const lightColor = useSelector(getColor);

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