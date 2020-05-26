import {
    TOGGLE_SWITCHER, TOGGLE_MODE, CHANGE_BRIGHTNESS
} from "../constants/actionsTypes";

const initialState = {
    mode: 0,
    brightness: 0.3,
    enabled: true
};

export default function lampReducer(state = initialState, {type, payload}) {
    switch (type) {
        case TOGGLE_MODE:
            return {
                ...state,
                mode: payload.mode,
            };
        case CHANGE_BRIGHTNESS:
            return {
                ...state,
                brightness: payload.brightness
            };
        case TOGGLE_SWITCHER:
            return {
                ...state,
                enabled: payload.enabled
            }
        default:
            return state;
    }
}