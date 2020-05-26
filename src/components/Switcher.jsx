import React from "react";
import '../style/controlButtons.css'

const Switcher = ({enabled, changeHandler}) => {

    return(
        <label className="control__switch">
            <input id="checkbox" type="checkbox" checked={enabled} onChange={changeHandler}/>
                <span className="control__switch__slider"/>
        </label>
    )
}

export default Switcher;