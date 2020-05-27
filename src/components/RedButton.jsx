import React from "react";
import '../style/controlButtons.css'
import {useDispatch, useSelector} from "react-redux";
import {getEnabled} from "../store/selectors/lampSelectors";
import {toggleMode} from "../store/actions/lampActions";

const RedButton = () => {
    const dispatch = useDispatch();
    const enabled = useSelector(getEnabled);

    const toggleModeHandler = ()=>{
        if(!enabled) return;
        dispatch(toggleMode());
    }

    return (
        <div className="control__button--red">
            <button id="redButton" onClick={toggleModeHandler}/>
        </div>
    )
}

export default RedButton;