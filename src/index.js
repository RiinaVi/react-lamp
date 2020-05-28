import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import {combineReducers, createStore, compose} from "redux";
import lampReducer from "./store/reducers/lampReducer";
import {Provider} from 'react-redux'

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25}) : compose;

const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(),
    )
);

const rootReducer = combineReducers({lampState: lampReducer})
const store = configureStore({});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


