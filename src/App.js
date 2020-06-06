import React from "react";
import NewBookContextProvider from "./contexts/NewBookContext";
import NewNavbar from "./components/NewNavbar";
import NewBookList from "./components/NewBookList";
import NewBookForm from "./components/NewBookForm";

function App() {
  return (
    <div className="App">
      <NewBookContextProvider>
        <NewNavbar />
        <NewBookList />
        <NewBookForm />
      </NewBookContextProvider>
    </div>
  );
}

export default App;
