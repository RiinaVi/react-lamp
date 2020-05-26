import React, {useCallback} from "react";
import BrightnessButtons from "../components/BrightnessButtons";
import {useDispatch, useSelector} from "react-redux";
import {getBrightness, getEnabled} from "../store/selectors/lampSelectors";
import {changeBrightness} from "../store/actions/lampActions";

const {increaseBrightness, decreaseBrightness} = require('../utils/calculateBrightness')
const BrightnessButtonsContainer = () => {
    const dispatch = useDispatch();
    const enabled = useSelector(getEnabled);
    const brightness = useSelector(getBrightness);


    const decreaseHandler = useCallback(() => {
        dispatch(changeBrightness(decreaseBrightness(enabled, brightness)))
    }, [enabled, brightness, dispatch])

    const increaseHandler = useCallback(() => {
        dispatch(changeBrightness(increaseBrightness(enabled, brightness)))
    }, [dispatch, enabled, brightness])

    return (
        <BrightnessButtons decreaseHandler={decreaseHandler} increaseHandler={increaseHandler}/>
    )
}

export default BrightnessButtonsContainer;