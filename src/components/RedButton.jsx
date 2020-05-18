import React, {useCallback} from "react";
import '../style/controlButtons.css'
import {useDispatch, useSelector} from "react-redux";
import {toggleMode} from "../store/actions/lampActions";
import {getEnabled, getMode} from "../store/selectors/lampSelectors";

const RedButton = () => {

    const dispatch = useDispatch();
    const enabled = useSelector(getEnabled);
    const lampMode = useSelector(getMode);

    const toggleModeHandler = useCallback(()=>{
        if (enabled) {
            switch (lampMode) {
                //white
                case 0:
                    dispatch(toggleMode(1, 'linear-gradient(yellow, rgba(255, 255, 0, 0))'));
                    break;
                //yellow
                case 1:
                    dispatch(toggleMode(2, 'none'));
                    break;
                //disabled
                case 2:
                    dispatch(toggleMode(0, 'linear-gradient(white, rgba(255, 255, 255, 0))'));
                    break;
                default:
                    break;
            }
        }
    },[dispatch, lampMode, enabled])

    return (
        <div className="control__button--red">
            <button id="redButton" onClick={toggleModeHandler} />
        </div>
    )
}

export default RedButton;