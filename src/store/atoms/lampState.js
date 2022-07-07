import { atom } from 'recoil';

export const lampState = atom({
  key: 'lampState',
  default: {
    mode: 0,
    brightness: 0.3,
    enabled: true,
  },
});
