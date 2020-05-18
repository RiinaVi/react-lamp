import {
    // SWITCH_TO_WHITE,
    // SWITCH_TO_YELLOW,
    // DISABLE,
    // INCREASE_BRIGHTNESS,
    // DECREASE_BRIGHTNESS,
    TOGGLE_SWITCHER, TOGGLE_MODE, CHANGE_BRIGHTNESS
} from "../constants/actionsTypes";

// export const switchToWhite = (mode, color) => {
//     return {
//         type: SWITCH_TO_WHITE,
//         payload: {
//             mode,
//             color
//         }
//     }
// };
// export const switchToYellow = (mode, color) => {
//     return {
//         type: SWITCH_TO_YELLOW,
//         payload: {
//             mode,
//             color
//         }
//     }
// };
// export const disable = (mode, color) => {
//     return {
//         type: DISABLE,
//         payload: {
//             mode,
//             color,
//         }
//     }
// };

// export const increaseBrightness = brightness => {
//     return {
//         type: INCREASE_BRIGHTNESS,
//         payload: {
//             brightness
//         }
//     }
// }

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

export const toggleMode = (mode, color) => {
    return {
        type: TOGGLE_MODE,
        payload: {
            mode,
            color
        }
    }
}