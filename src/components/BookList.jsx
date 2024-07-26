import React, { useState, useEffect } from "react";

function BookList({ books, setBooks, filter }) {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(books);

  function handleReturnButton(bookId) {
    const bookToReturn = borrowedBooks.find(
      (borrowedBook) => borrowedBook.id === bookId
    );

    //if you have this book borrowed it will return and update borrowed books list, if you don't have
    //this book borrowed it will break out of function
    if (bookToReturn) {
      const newBorrowedBooks = borrowedBooks.filter((borrowedBook, index) => {
        return (
          borrowedBook.id !== bookId ||
          borrowedBooks.findIndex((book) => book.id === bookId) !== index
        );
      });
      setBorrowedBooks(newBorrowedBooks);
    } else {
      alert("You have returned all copies of that book!");
      return;
    }

    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, bookCopies: book.bookCopies + 1 };
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  function handleBorrowButton(bookId) {
    //checks if book is available(if copies > 0) and adds to borrowes books list if it is
    const updatedBooks = books.map((book) => {
      if (bookId === book.id && book.bookCopies > 0) {
        alert(`Book ${book.bookName} successfully borrowed!`);
        setBorrowedBooks((prevBorrowedBooks) => [...prevBorrowedBooks, book]);
        return { ...book, bookCopies: book.bookCopies - 1 };
      } else if (bookId === book.id && book.bookCopies === 0) {
        alert("There is no copies of that book left in the library");
      }

      return book;
    });

    setBooks(updatedBooks);
  }

  function ShowBorrowedBooks() {
    if (borrowedBooks.length === 0) {
      alert("You do not have any borrowed books");
    }

    borrowedBooks.forEach((book) => {
      alert(`${book.bookName}`);
    });
  }

  //filtering books
  useEffect(() => {
    const timeout = setTimeout(() => {
      //second filter is a prop from app.jsx, don't confuse it with method filter
      const newFilteredBooks = books.filter((book) =>
        book.bookName.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredBooks(newFilteredBooks);
    }, 400);
  }, [filter, books]);

  return (
    <div className="container">
      <button onClick={ShowBorrowedBooks} className="check-button">
        Check borrowed books
      </button>
      <ul>
        {filteredBooks.map((book) => {
          return (
            <li key={book.id}>
              <div className="book-image">
                <img src={book.bookUrl}></img>
              </div>
              <div className="book-description">
                <h3>
                  Name: <span className="not-bold">{book.bookName}</span>
                </h3>
                <span>
                  <span className="bold">Author:</span> {book.bookAuthor}
                </span>
                <span>
                  <span className="bold">Date of release:</span> {book.bookYear}
                </span>
                <span>
                  <span className="bold">Genre:</span> {book.bookGenre}
                </span>
                <span>
                  <span className="bold">Copies:</span> {book.bookCopies}
                </span>
                <div className="book-buttons">
                  <button
                    onClick={() => handleBorrowButton(book.id)}
                    className="borrow-button"
                  >
                    Borrow
                  </button>
                  <button
                    onClick={() => handleReturnButton(book.id)}
                    className="return-button"
                  >
                    Return
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookList;
