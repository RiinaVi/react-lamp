import React, {useContext} from "react";
import {ModeContext} from "../providers/ModeProvider";
import '../style/controlButtons.css'

const RedButton = () => {

    const {toggleMode} = useContext(ModeContext);

    return (
        <div className="control__button--red">
            <button id="redButton" onClick={toggleMode} />
        </div>
    )
}

export default RedButton;