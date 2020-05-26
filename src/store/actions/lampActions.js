import {
    TOGGLE_SWITCHER, TOGGLE_MODE, CHANGE_BRIGHTNESS
} from "../constants/actionsTypes";


export const changeBrightness = brightness => {
    return {
        type: CHANGE_BRIGHTNESS,
        payload: {
            brightness
        }
    }
}

export const toggleSwitcher = enabled => {
    return{
        type: TOGGLE_SWITCHER,
        payload: {
            enabled
        }
    }
}

export const toggleMode = mode => {
    return {
        type: TOGGLE_MODE,
        payload: {
            mode,
        }
    }
}