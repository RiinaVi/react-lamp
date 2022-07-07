import React from "react";
import { useRecoilValue } from 'recoil';

import {getBrightness, getMode} from "../store/selectors/lampSelectors";
import {COLORS} from "../store/constants/states";

import '../style/lamp.css'

const Lamp = () => {
  const brightness = useRecoilValue(getBrightness);
  const lampMode = useRecoilValue(getMode);
  const lightColor = COLORS[lampMode];

  return (
    <div className="lamp">
      <div className="lamp__bulb"/>
      <div className="lamp__stem"/>
      <div className="lamp__basis"/>
      <div className="lamp__light"
        style={{opacity: brightness, backgroundImage: lightColor}}
      />
    </div>
  )
}

export default Lamp;
