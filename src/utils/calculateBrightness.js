const {BRIGHTNESS_STATES} = require( "../store/constants/states");

function increaseBrightness(enabled, brightness) {
    if(!enabled) return null;
    if (brightness < BRIGHTNESS_STATES.MAX_BRIGHTNESS) {
        return Number((brightness + BRIGHTNESS_STATES.STEP).toFixed(1))
    }
    return BRIGHTNESS_STATES.MAX_BRIGHTNESS;
}

function decreaseBrightness(enabled, brightness) {
    if(!enabled) return null;
    if (brightness > BRIGHTNESS_STATES.MIN_BRIGHTNESS) {
            return Number((brightness - BRIGHTNESS_STATES.STEP).toFixed(1))
    }
    return BRIGHTNESS_STATES.MIN_BRIGHTNESS;
}

module.exports = {
    increaseBrightness, decreaseBrightness
}
