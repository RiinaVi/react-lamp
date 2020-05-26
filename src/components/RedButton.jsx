import React from "react";
import '../style/controlButtons.css'

const RedButton = ({toggleModeHandler}) => {

    return (
        <div className="control__button--red">
            <button id="redButton" onClick={toggleModeHandler}/>
        </div>
    )
}

export default RedButton;