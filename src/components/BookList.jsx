function BookList({ books, setBooks }) {
  function handleReturnButton(bookId) {
    const updatedBook = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, bookCopies: book.bookCopies + 1 };
      }
      return book;
    });

    setBooks(updatedBook);
  }

  function handleBorrowButton(bookId) {
    const updatedBook = books.map((book) => {
      if (bookId === book.id && book.bookCopies > 0) {
        alert(`Book ${book.bookName} successfully borrowed!`);
        return { ...book, bookCopies: book.bookCopies - 1 };
      } else if (bookId === book.id && book.bookCopies === 0) {
        alert("There is no copies of that book left in the library");
      }
      return book;
    });

    setBooks(updatedBook);
  }
  return (
    <>
      <ul>
        {books.map((book) => {
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
    </>
  );
}

export default BookList;
