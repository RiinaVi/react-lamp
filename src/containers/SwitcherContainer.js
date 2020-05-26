import React, {useCallback} from "react";
import Switcher from "../components/Switcher";
import {useDispatch, useSelector} from "react-redux";
import {getEnabled} from "../store/selectors/lampSelectors";
import {changeBrightness, toggleMode, toggleSwitcher} from "../store/actions/lampActions";
import {BRIGHTNESS_STATES, LAMP_STATES, SWITCH_STATES} from "../store/constants/states";

const SwitcherContainer = () => {

    const enabled = useSelector(getEnabled);
    const dispatch = useDispatch();

    const changeHandler = useCallback(()=>{
        if (!enabled) {
            dispatch(toggleSwitcher(SWITCH_STATES.ON));
            dispatch(toggleMode(LAMP_STATES.WHITE));
        } else {
            dispatch(toggleSwitcher(SWITCH_STATES.OFF));
            dispatch(changeBrightness(BRIGHTNESS_STATES.INITIAL_BRIGHTNESS));
            dispatch(toggleMode(LAMP_STATES.NONE));
        }
        dispatch(toggleSwitcher(!enabled));
    }, [dispatch, enabled])


    return(
        <Switcher changeHandler={changeHandler} enabled={enabled}/>
    )
}

export default SwitcherContainer;