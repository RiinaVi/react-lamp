import React from "react";
import '../style/controlButtons.css'
import {useDispatch, useSelector} from "react-redux";
import {getEnabled} from "../store/selectors/lampSelectors";
import {toggleSwitcher} from "../store/actions/lampActions";

const Switcher = () => {
    const enabled = useSelector(getEnabled);
    const dispatch = useDispatch();

    const changeHandler = () => {
        dispatch(toggleSwitcher())
    }

    return(
        <label className="control__switch">
            <input id="checkbox" type="checkbox" checked={enabled} onChange={changeHandler}/>
                <span className="control__switch__slider"/>
        </label>
    )
}

export default Switcher;