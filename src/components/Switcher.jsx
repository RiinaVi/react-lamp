import React, {useCallback} from "react";
import '../style/controlButtons.css'
import {useDispatch, useSelector} from "react-redux";
import {getEnabled} from "../store/selectors/lampSelectors";
import {changeBrightness, toggleMode, toggleSwitcher} from "../store/actions/lampActions";

const Switcher = () => {
    const INITIAL_BRIGHTNESS = 0.3
    const enabled = useSelector(getEnabled);
    const dispatch = useDispatch();
    const changeHandler = useCallback(()=>{
        if (!enabled) {
            //white
            dispatch(toggleSwitcher(true))
            dispatch(toggleMode(0, 'linear-gradient(white, rgba(255, 255, 255, 0))'));
        } else {
            //disable
            dispatch(toggleSwitcher(false))
            dispatch(changeBrightness(INITIAL_BRIGHTNESS));
            dispatch(toggleMode(2, 'none'))
        }
        dispatch(toggleSwitcher(!enabled))
    }, [dispatch, enabled])

    return(
        <label className="control__switch">
            <input id="checkbox" type="checkbox" checked={enabled} onChange={changeHandler}/>
                <span className="control__switch__slider"/>
        </label>
    )
}

export default Switcher;