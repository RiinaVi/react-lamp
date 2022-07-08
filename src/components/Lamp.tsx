import * as React from "react";
import { observer } from 'mobx-react-lite';

import {COLORS} from "../store/constants/states";
import { useDataStore } from '../store/context';

import '../style/lamp.css'

const Lamp: React.FC = observer(() => {
  const { brightness, mode } = useDataStore();
  const lightColor = COLORS[mode];

  return (
    <div className="lamp">
      <div className="lamp__bulb"/>
      <div className="lamp__stem"/>
      <div className="lamp__basis"/>
      <div
        className="lamp__light"
        style={{opacity: brightness, backgroundImage: lightColor}}
      />
    </div>
  );
})

export default Lamp;
