import { createContext, useContext, useState } from 'react';
import React from 'react';

const AppContext = createContext();

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [state, setState] = useState('ola');
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
export function useAppContext() {
  return React.useContext(AppContext);
}
