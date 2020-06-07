import React, { createContext, useReducer, useEffect } from "react";
import BookReducer from "../reducers/BookReducers";

export const NewBookContext = createContext();

const NewBookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    return localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <NewBookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </NewBookContext.Provider>
  );
};

export default NewBookContextProvider;
