import React, { createContext } from "react";
import { Provider } from 'react-redux';
import { stopSearchReducer } from "../reducers/stopSearchReducer";
import { createStore } from "redux";

const StopSearchContext = createContext({});
const store = createStore(stopSearchReducer);

const StopSearchProvider = ({ children, initialState }) => {
  
  return (
    <Provider store={store} context={StopSearchContext}>{children}</Provider>
  );
};

export { StopSearchContext, StopSearchProvider };