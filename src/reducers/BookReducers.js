import uuid from "uuid/v1";

const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD BOOK":
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuid() },
      ];
    case "REMOVE BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BookReducer;
