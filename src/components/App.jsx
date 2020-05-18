import React from 'react';
import Lamp from "../components/Lamp";
import BrightnessButtons from "../components/BrightnessButtons";
import RedButton from "../components/RedButton";
import Switcher from "../components/Switcher";
import ModeProvider from "../providers/ModeProvider";
import '../style/App.css';

function App() {

  return (
      <ModeProvider>
          <div className={'container'}>
              <Lamp/>
              <div className={"control"}>
                  <BrightnessButtons/>
                  <RedButton/>
                  <Switcher/>
              </div>
          </div>
      </ModeProvider>

  );
}

export default App;
