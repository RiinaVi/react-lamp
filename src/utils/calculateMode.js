const {LAMP_STATES} = require( "../store/constants/states");
function calculateMode(enabled, lampMode) {
    if (!enabled) return null;
    switch (lampMode) {
        case LAMP_STATES.WHITE:
            return LAMP_STATES.YELLOW;
        case LAMP_STATES.YELLOW:
            return LAMP_STATES.NONE;
        case LAMP_STATES.NONE:
            return LAMP_STATES.WHITE;
        default:
            break;
    }
}

module.exports = calculateMode;