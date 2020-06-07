import React, { createContext, useReducer } from "react";
import BookReducer from "../reducers/BookReducers";

export const NewBookContext = createContext();

const NewBookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, []);

  return (
    <NewBookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </NewBookContext.Provider>
  );
};

export default NewBookContextProvider;
