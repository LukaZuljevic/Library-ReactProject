import BookForm from "./components/BookForm.jsx";
import Header from "./components/Header.jsx";
import BookList from "./components/BookList.jsx";
import data from "./components/bookData.js";
import React, { useEffect, useState } from "react";
import BookFilter from "./components/BookFilter.jsx";

function App() {
  const [filter, setFilter] = useState("");

  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) ?? data.allBooks
  );

  function handleAddBooks(newBook) {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <Header />
      <BookForm addBooks={handleAddBooks} />
      <BookFilter setFilter={setFilter} />
      <BookList books={books} setBooks={setBooks} filter={filter}/>
    </>
  );
}

export default App;
