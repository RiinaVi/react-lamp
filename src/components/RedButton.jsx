import React from "react";
import {useDispatch} from "react-redux";
import {toggleMode} from "../store/actions/lampActions";
import '../style/controlButtons.css';

const RedButton = () => {
    const dispatch = useDispatch();

    const toggleModeHandler = () => {
        dispatch(toggleMode());
    }

    return (
        <div className="control__button--red">
            <button id="redButton" onClick={toggleModeHandler}/>
        </div>
    )
}

export default RedButton;