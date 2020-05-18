import React, {useContext} from "react";
import {ModeContext} from "../providers/ModeProvider";
import '../style/lamp.css'

const Lamp = () => {
    const {lightColor, brightness} = useContext(ModeContext);

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