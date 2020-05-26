const calculateMode = require('./utils/calculateMode');
const {increaseBrightness, decreaseBrightness} = require('./utils/calculateBrightness');

describe('Mode calculator', () => {
    it.each
        ` enabled |   previousMode   | nextMode
          ${true} |      ${0}        |   ${1}
          ${true} |      ${1}        |   ${2}
          ${true} |      ${2}        |   ${0}
          ${false}|      ${0}        |   ${null}
          ${false}|      ${1}        |   ${null}
          ${false}|      ${2}        |   ${null}
    `('returns $nextMode if enabled - $enabled and previous mode - $previousMode',
        ({enabled, previousMode, nextMode}) => {
            expect(calculateMode(enabled, previousMode)).toBe(nextMode);
        });
});


describe('Brightness calculator', () => {
    it.each
        ` enabled | previousBrightness | nextBrightness
          ${true} |      ${0.3}        |   ${0.2}
          ${true} |      ${1}          |   ${0.9}
          ${true} |      ${0.5}        |   ${0.4}
          ${true} |      ${0.2}        |   ${0.2}
          ${false}|      ${0.3}        |   ${null}
          ${false}|      ${1}          |   ${null}
    `('returns $nextBrightness if enabled - $enabled and previous brightness - $previousBrightness',
        ({enabled, previousBrightness, nextBrightness}) => {
            expect(decreaseBrightness(enabled, previousBrightness)).toBe(nextBrightness);
        });
    it.each
        ` enabled | previousBrightness | nextBrightness
          ${true} |      ${0.3}        |   ${0.4}
          ${true} |      ${1}          |   ${1}
          ${true} |      ${0.5}        |   ${0.6}
          ${true} |      ${0.2}        |   ${0.3}
          ${false}|      ${1}          |   ${null}
          ${false}|      ${0.2}        |   ${null}
    `('returns $nextBrightness if enabled - $enabled and previous brightness - $previousBrightness',
        ({enabled, previousBrightness, nextBrightness}) => {
            expect(increaseBrightness(enabled, previousBrightness)).toBe(nextBrightness);
        });
});


