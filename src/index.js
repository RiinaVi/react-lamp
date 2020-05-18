import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import {combineReducers, createStore} from "redux";
import lampReducer from "./store/reducers/lampReducer";
import {Provider} from 'react-redux'


const rootReducer = combineReducers({lampState: lampReducer})
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


