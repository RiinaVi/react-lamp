import React, {useCallback, useState} from "react";

export const ModeContext = React.createContext(new Set());

export default function ModeProvider({children}) {
    const MIN_BRIGHTNESS = 0.2;
    const MAX_BRIGHTNESS = 1;
    const STEP = 0.1;
    const INITIAL_BRIGHTNESS = 0.3;

    const [lampMode, setLampMode] = useState(0);
    const [enabled, setEnable] = useState(true);
    const [brightness, setBrightness] = useState(INITIAL_BRIGHTNESS);
    const [lightColor, setLightColor] = useState('linear-gradient(white, rgba(255, 255, 255, 0))')



    const toggleMode = useCallback(() => {
        if (enabled) {
            switch (lampMode) {
                //white
                case 0:
                    setLampMode(1);
                    setLightColor('linear-gradient(yellow, rgba(255, 255, 0, 0))');
                    break;
                //yellow
                case 1:
                    setLampMode(2);
                    setLightColor('none')
                    break;
                //disabled
                case 2:
                    setLampMode(0);
                    setLightColor('linear-gradient(white, rgba(255, 255, 255, 0))');
                    break;
                default:
                    break;
            }
        }
    }, [lampMode, enabled]);


    const toggleSwitch = useCallback(() => {

        if (!enabled) {
            //white
            setEnable(true)
            setLampMode(0);
            setLightColor('linear-gradient(white, rgba(255, 255, 255, 0))');
        } else {
            //disable
            setEnable(false)
            setBrightness(INITIAL_BRIGHTNESS);
            setLampMode(2);
            setLightColor('none')
        }
    }, [enabled]);


    const increaseBrightness = useCallback(() => {
        if (enabled) {
            if ((brightness) < MAX_BRIGHTNESS) {
                setBrightness(Number((brightness + STEP).toFixed(1)))
            }
        }
    }, [brightness, enabled])

    const decreaseBrightness = useCallback(() => {
        if (enabled) {
            if ((brightness) > MIN_BRIGHTNESS) {
                setBrightness(Number((brightness - STEP).toFixed(1)))
            }
        }
    }, [brightness, enabled])

    return (
        <ModeContext.Provider
            value={{
                toggleMode,
                lampMode,
                toggleSwitch,
                brightness,
                enabled,
                increaseBrightness,
                decreaseBrightness,
                lightColor
            }}
        >
            {children}
        </ModeContext.Provider>
    )
}
