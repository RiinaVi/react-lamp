import {
    TOGGLE_SWITCHER, TOGGLE_MODE, INCREASE_BRIGHTNESS, DECREASE_BRIGHTNESS,
} from "../constants/actionsTypes";


export const increaseBrightness = () => {
    return {
        type: INCREASE_BRIGHTNESS,
    }
}
export const decreaseBrightness = () => {
    return {
        type: DECREASE_BRIGHTNESS,
    }
}

export const toggleSwitcher = () => {
    return{
        type: TOGGLE_SWITCHER,
    }
}

export const toggleMode = () => {
    return {
        type: TOGGLE_MODE,
    }
}