import React, {useContext} from "react";
import {ModeContext} from "../providers/ModeProvider";
import '../style/controlButtons.css'

const Switcher = () => {

    const {toggleSwitch, enabled} = useContext(ModeContext);


    return(
        <label className="control__switch">
            <input id="checkbox" type="checkbox" checked={enabled} onChange={toggleSwitch}/>
                <span className="control__switch__slider"/>
        </label>
    )
}

export default Switcher;