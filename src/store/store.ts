import { BRIGHTNESS_STATES, LAMP_STATES } from './constants/states';

export function createStore() {
  return {
    mode: 0,
    brightness: 0.3,
    enabled: true,
    // State in mobx is Mutable!!!
    toggleMode() {
      if (!this.enabled) return;
      this.mode = LAMP_STATES[this.mode + 1] || LAMP_STATES[0];
    },
    increaseBrightness() {
      if (!this.enabled) return;
      this.brightness = Math.min(BRIGHTNESS_STATES.MAX_BRIGHTNESS,
        Number((this.brightness + BRIGHTNESS_STATES.STEP).toFixed(1)))
    },
    decreaseBrightness() {
      if (!this.enabled) return;
      this.brightness = Math.max(BRIGHTNESS_STATES.MIN_BRIGHTNESS,
        Number((this.brightness - BRIGHTNESS_STATES.STEP).toFixed(1)))
    },
    toggleSwitcher () {
      this.mode = this.enabled ? LAMP_STATES[2] : LAMP_STATES[0];
      this.brightness = BRIGHTNESS_STATES.INITIAL_BRIGHTNESS;
      this.enabled = !this.enabled;
    },
  };
}
export type TStore = ReturnType<typeof createStore>;
