import * as React from "react";

import { useDataStore } from '../store/context';

import '../style/controlButtons.css';

const BrightnessButtons: React.FC = () => {
  const { decreaseBrightness, increaseBrightness } = useDataStore();

  return (
    <div className="control__brightness">
      <button id="decreaseButton" onClick={decreaseBrightness}>-</button>
      <button id="increaseButton" onClick={increaseBrightness}>+</button>
    </div>
  );
}

export default BrightnessButtons;
