import React from 'react';
import Lamp from "./Lamp";
import BrightnessButtons from "./BrightnessButtons";
import RedButton from "./RedButton";
import Switcher from "./Switcher";
import '../style/App.css';

function App() {

    return (
        <div className={'container'}>
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
