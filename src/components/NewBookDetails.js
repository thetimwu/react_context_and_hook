import React, { useContext } from "react";
import { NewBookContext } from "../contexts/NewBookContext";

const NewBookDetails = ({ book }) => {
  const { deleteBook } = useContext(NewBookContext);
  return (
    <li onClick={() => deleteBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default NewBookDetails;
