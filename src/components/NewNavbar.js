import React, { useContext } from "react";
import { NewBookContext } from "../contexts/NewBookContext";

const NewNavbar = () => {
  const { books } = useContext(NewBookContext);
  return (
    <div className="navbar">
      <h1>Tim's Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default NewNavbar;
