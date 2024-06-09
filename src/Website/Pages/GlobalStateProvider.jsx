import React, { createContext, useState } from 'react';

const GlobalStateContext = createContext();
const GlobalStateProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <GlobalStateContext.Provider value={{search, setSearch}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext};

