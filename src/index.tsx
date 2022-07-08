import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import { StoreProvider } from './store/context';

import './style/index.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App/>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


