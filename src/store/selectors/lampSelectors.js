import { selector } from 'recoil';

import { lampState } from '../atoms/lampState';

export const getBrightness = selector({
  key: 'getBrightness',
  get: ({get}) => {
    const { brightness } = get(lampState);
    return brightness;
  },
});

export const getMode = selector({
  key: 'getMode',
  get: ({get}) => {
    const { mode } = get(lampState);
    return mode;
  },
});

export const getEnabled = selector({
  key: 'getEnabled',
  get: ({get}) => {
    const { enabled } = get(lampState);
    return enabled;
  },
});

