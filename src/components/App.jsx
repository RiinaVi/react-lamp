import React from 'react';
import BrightnessButtonsContainer from "../containers/BrightnessButtonsContainer";
import SwitcherContainer from "../containers/SwitcherContainer";
import RedButtonContainer from "../containers/RedButtonContainer";
import LampContainer from "../containers/LampContainer";
import '../style/App.css';

function App() {

  return (
          <div className={'container'}>
              <LampContainer/>
              <div className={"control"}>
                  <BrightnessButtonsContainer/>
                  <RedButtonContainer/>
                  <SwitcherContainer/>
              </div>
          </div>
  );
}

export default App;
