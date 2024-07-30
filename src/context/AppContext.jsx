import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    // Define your initial state here
  });

  // Define any functions to update state here
  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
