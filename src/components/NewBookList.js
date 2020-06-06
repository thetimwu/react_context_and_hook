import React, { useContext } from "react";
import { NewBookContext } from "../contexts/NewBookContext";
import NewBookDetails from "./NewBookDetails";
const NewBookList = () => {
  const { books } = useContext(NewBookContext);
  return books.length ? (
    <ul>
      {books.map((book) => {
        return <NewBookDetails book={book} key={book.id} />;
      })}
    </ul>
  ) : (
    <div className="empty">No books to read. Hello free time:)</div>
  );
};

export default NewBookList;
