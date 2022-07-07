import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {getEnabled} from '../store/selectors/lampSelectors';
import { lampState } from '../store/atoms/lampState';
import { BRIGHTNESS_STATES, LAMP_STATES } from '../store/constants/states';

import '../style/controlButtons.css';

const Switcher = () => {
  const enabled = useRecoilValue(getEnabled);
  const setLampState = useSetRecoilState(lampState);

  const changeHandler = () => {
    setLampState((prev) => ({
      ...prev,
      enabled: !enabled,
      mode: enabled ? LAMP_STATES[2] : LAMP_STATES[0],
      brightness: BRIGHTNESS_STATES.INITIAL_BRIGHTNESS,
    }));
  }

  return (
    <label className="control__switch">
      <input id="checkbox" type="checkbox" checked={enabled} onChange={changeHandler}/>
      <span className="control__switch__slider"/>
    </label>
  )
}

export default Switcher;
