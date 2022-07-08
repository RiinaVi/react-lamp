import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';

import { createStore, TStore } from './store';


export const StoreContext = React.createContext<TStore | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalStore(createStore);
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useDataStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

