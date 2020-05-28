import {
    TOGGLE_SWITCHER, TOGGLE_MODE, INCREASE_BRIGHTNESS, DECREASE_BRIGHTNESS
} from "../constants/actionsTypes";
import {BRIGHTNESS_STATES, LAMP_STATES} from "../constants/states";

const initialState = {
    mode: 0,
    brightness: 0.3,
    enabled: true
};

export default function lampReducer(state = initialState, {type}) {
    switch (type) {
        case TOGGLE_MODE:
            return {
                ...state,
                mode: LAMP_STATES[state.mode + 1] || LAMP_STATES[0],
            };
        case INCREASE_BRIGHTNESS:
            return {
                ...state,
                brightness: Math.min(BRIGHTNESS_STATES.MAX_BRIGHTNESS,
                    Number((state.brightness + BRIGHTNESS_STATES.STEP).toFixed(1)))
            };
        case DECREASE_BRIGHTNESS:
            return {
                ...state,
                brightness: Math.max(BRIGHTNESS_STATES.MIN_BRIGHTNESS,
                    Number((state.brightness - BRIGHTNESS_STATES.STEP).toFixed(1)))
            };
        case TOGGLE_SWITCHER:
            return {
                ...state,
                enabled: !state.enabled,
                mode: state.enabled ? LAMP_STATES[2] : LAMP_STATES[0],
                brightness: BRIGHTNESS_STATES.INITIAL_BRIGHTNESS
            }
        default:
            return state;
    }
}