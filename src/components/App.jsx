import React, { useEffect } from 'react';
import Lamp from "./Lamp";
import BrightnessButtons from "./BrightnessButtons";
import RedButton from "./RedButton";
import Switcher from "./Switcher";
import '../style/App.css';
import { useRecoilSnapshot } from 'recoil';

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);
  
  return null;
}

function App() {

    return (
        <div className={'container'}>
          <DebugObserver />
            <Lamp/>
            <div className={"control"}>
                <BrightnessButtons/>
                <RedButton/>
                <Switcher/>
            </div>
        </div>
    );
}

export default App;
