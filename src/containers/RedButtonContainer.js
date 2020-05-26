import React, {useCallback} from "react";
import RedButton from "../components/RedButton";
import {useDispatch, useSelector} from "react-redux";
import {getEnabled, getMode} from "../store/selectors/lampSelectors";
import {toggleMode} from "../store/actions/lampActions";
const calculateMode = require('../utils/calculateMode');

const RedButtonContainer = () => {
    const dispatch = useDispatch();
    const enabled = useSelector(getEnabled);
    const lampMode = useSelector(getMode);


    const toggleModeHandler = useCallback(()=>{
        dispatch(toggleMode(calculateMode(enabled,lampMode)));
    },[dispatch, enabled, lampMode])


    return(
        <RedButton toggleModeHandler={toggleModeHandler}/>
    )

}

export default RedButtonContainer;
