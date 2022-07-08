import * as React from 'react';

import Lamp from "./Lamp";
import RedButton from "./RedButton";
import Switcher from "./Switcher";
import BrightnessButtons from "./BrightnessButtons";

import '../style/App.css';

const App = () => (
  <div className={'container'}>
    <Lamp />
    <div className={'control'}>
      <BrightnessButtons />
      <RedButton />
      <Switcher />
    </div>
  </div>
)

export default App;
