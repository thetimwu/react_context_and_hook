import React, { useContext } from "react";
import { NewBookContext } from "../contexts/NewBookContext";

const NewBookDetails = ({ book }) => {
  const { dispatch } = useContext(NewBookContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE BOOK", id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default NewBookDetails;
