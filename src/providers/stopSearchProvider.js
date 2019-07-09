import React, { createContext, useReducer } from "react";
import { stopSearchReducer } from "../reducers/stopSearchReducer";

const StopSearchContext = createContext({});

const StopSearchProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(stopSearchReducer, initialState);
  const context = { state, dispatch };
  return (
    <StopSearchContext.Provider value={context}>{children}</StopSearchContext.Provider>
  );
};

export { StopSearchContext, StopSearchProvider };