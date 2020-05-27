import * as types from './store/constants/actionsTypes';
import * as lampActions from './store/actions/lampActions';
import configureStore from 'redux-mock-store';
import lampReducer from "./store/reducers/lampReducer";

const mockStore = configureStore([]);
const initialState = {
    mode: 0,
    brightness: 0.3,
    enabled: true
};

describe('redux', () => {
    it.each
        `           type                        |       action
            ${{type: types.TOGGLE_MODE}}        |   ${lampActions.toggleMode}
            ${{type: types.TOGGLE_SWITCHER}}    |   ${lampActions.toggleSwitcher}
            ${{type: types.INCREASE_BRIGHTNESS}}|   ${lampActions.increaseBrightness}
            ${{type: types.DECREASE_BRIGHTNESS}}|   ${lampActions.decreaseBrightness}
           
    `('dispatches action $action if action type is $type',
        ({type, action}) => {
            const store = mockStore(initialState);
            store.dispatch(action());
            expect(store.getActions()).toEqual([type]);
        });

})

describe('lamp reducer', () => {
    it('should return the initial state', () => {
        expect(lampReducer(undefined, {})).toEqual(initialState)
    })
    it.each
        `      action             |    initialState                        |              changedState
            ${TOGGLE_MODE}        |${initialState}                         | ${{mode:1,brightness:0.3,enabled:true}}
            ${TOGGLE_SWITCHER}    |${initialState}                         | ${{mode:2,brightness:0.3,enabled:false}}
            ${INCREASE_BRIGHTNESS}|${initialState}                         | ${{mode:0,brightness:0.4,enabled:true}}
            ${DECREASE_BRIGHTNESS}|${initialState}                         | ${{mode:0,brightness:0.2,enabled:true}}
            ${TOGGLE_MODE}        |${{mode:1,brightness:0.3,enabled:true}} | ${{mode:2,brightness:0.3,enabled:true}}
            ${TOGGLE_MODE}        |${{mode:2,brightness:0.3,enabled:true}} | ${{mode:0,brightness:0.3,enabled:true}}
            ${TOGGLE_SWITCHER}    |${{mode:0,brightness:0.3,enabled:false}}| ${{mode:0,brightness:0.3,enabled:true}}
            ${TOGGLE_SWITCHER}    |${{mode:0,brightness:1,enabled:false}}  | ${{mode:0,brightness:0.3,enabled:true}}
            ${TOGGLE_SWITCHER}    |${{mode:0,brightness:1,enabled:true}}   | ${{mode:2,brightness:0.3,enabled:false}}
            ${DECREASE_BRIGHTNESS}|${{mode:0,brightness:0.2,enabled:true}} | ${{mode:0,brightness:0.2,enabled:true}}
            ${INCREASE_BRIGHTNESS}|${{mode:0,brightness:1,enabled:true}}   | ${{mode:0,brightness:1,enabled:true}}
           
    `('should handle $action and change store from $initialState to $changedState',
        ({action, initialState, changedState}) => {
            expect(lampReducer(initialState, {type: types[action]})).toEqual(changedState)
        });
})