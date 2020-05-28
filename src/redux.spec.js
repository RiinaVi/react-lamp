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
        `     action          |              initialState               |              changedState
     ${'TOGGLE_MODE'}         | ${initialState}                         | ${{...initialState, mode:1}}
     ${'TOGGLE_SWITCHER'}     | ${initialState}                         | ${{...initialState, mode:2, enabled:false}}
     ${'INCREASE_BRIGHTNESS'} | ${initialState}                         | ${{...initialState, brightness:0.4}}
     ${'DECREASE_BRIGHTNESS'} | ${initialState}                         | ${{...initialState, brightness:0.2}}
     ${'TOGGLE_MODE'}         | ${{...initialState, mode:1}}            | ${{...initialState, mode:2}}
     ${'TOGGLE_MODE'}         | ${{...initialState, mode:2}}            | ${{...initialState, mode:0}}
     ${'TOGGLE_SWITCHER'}     | ${{...initialState, enabled:false}}     | ${{...initialState, enabled:true}}
     ${'TOGGLE_SWITCHER'}     | ${{mode:0,brightness:1,enabled:false}}  | ${{mode:0,brightness:0.3,enabled:true}}
     ${'TOGGLE_SWITCHER'}     | ${{mode:0,brightness:1,enabled:true}}   | ${{mode:2,brightness:0.3,enabled:false}}
     ${'DECREASE_BRIGHTNESS'} | ${{...initialState, brightness:0.2}}    | ${{...initialState, brightness:0.2}}
     ${'INCREASE_BRIGHTNESS'} | ${{...initialState, brightness:1}}      | ${{...initialState, brightness:1}}
           
    `('should handle $action and change store from $initialState to $changedState',
        ({action, initialState, changedState}) => {
            expect(lampReducer(initialState, {type: types[action]})).toEqual(changedState)
        });
})