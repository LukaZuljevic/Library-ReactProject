import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

function BookForm({ addBooks }) {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookYear, setBookYear] = useState("");
  const [bookUrl, setBookUrl] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookCopies, setBookCopies] = useState(1);


  //adding book on submit
  function addBook(event) {
    event.preventDefault(); // Prevents form submission

    if (!bookName || !bookAuthor || !bookUrl || !bookYear || !bookGenre) {
      alert("Enter all info about a book please");

      return;
    }

    const newBook = {
      id: uuidv4(),
      bookName,
      bookAuthor,
      bookYear,
      bookUrl,
      bookGenre,
      bookCopies,
    };

    addBooks(newBook);

    setBookAuthor("");
    setBookGenre("");
    setBookName("");
    setBookUrl("");
    setBookYear("");
  }

  function handleNameChange(event) {
    setBookName(event.target.value);
  }

  function handleAuthorChange(event) {
    setBookAuthor(event.target.value);
  }

  function handleYearChange(event) {
    setBookYear(event.target.value);
  }

  function handleGenreChange(event) {
    setBookGenre(event.target.value);
  }
  function handleUrlChange(event) {
    setBookUrl(event.target.value);
  }

  return (
    <div className="form-div">
      <h3>Add a new book</h3>
      <form onSubmit={addBook}>
        <div className="single-form-input">
          <label>Enter book name:</label>
          <input
            value={bookName}
            type="text"
            placeholder="Book name"
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="single-form-input">
          <label>Enter an author:</label>
          <input
            value={bookAuthor}
            type="text"
            placeholder="Author"
            onChange={handleAuthorChange}
          ></input>
        </div>
        <div className="single-form-input">
          <label>Enter year of release:</label>
          <input
            value={bookYear}
            type="number"
            placeholder="Release year"
            onChange={handleYearChange}
          ></input>
        </div>
        <div className="single-form-input">
          <label>Enter genre:</label>
          <input
            value={bookGenre}
            type="text"
            placeholder="Genre"
            list="genre-list"
            onChange={handleGenreChange}
          ></input>
          <datalist id="genre-list">
            <select>
              <option>Drama</option>
              <option>Roman</option>
              <option>Biografija</option>
              <option>Triler</option>
              <option>Komedija</option>
              <option>Religijska</option>
            </select>
          </datalist>
        </div>
        <div className="single-form-input">
          <label>Enter book image:</label>
          <input
            value={bookUrl}
            type="url"
            placeholder="Image URL"
            onChange={handleUrlChange}
          ></input>
        </div>
        <button className="submit-button" type="submit">
          Submit book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
