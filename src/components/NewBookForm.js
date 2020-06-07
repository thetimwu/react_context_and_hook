import React, { useContext, useState } from "react";
import { NewBookContext } from "../contexts/NewBookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(NewBookContext);
  const [inputValue, setInputValue] = useState({
    title: "",
    author: "",
  });
  const changeHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD BOOK",
      book: { title: inputValue.title, author: inputValue.author },
    });
    setInputValue({
      title: "",
      author: "",
    });
  };
  return (
    <form>
      <input
        type="text"
        placeholder="book title"
        value={inputValue.title}
        onChange={changeHandler}
        name="title"
      />
      <input
        type="text"
        placeholder="author"
        value={inputValue.author}
        onChange={changeHandler}
        name="author"
      />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default NewBookForm;
