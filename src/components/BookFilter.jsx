import React, { useState } from "react";
function BookFilter({ setFilter }) {
  function handleFilter(event) {
    setFilter(event.target.value);
  }

  return (
    <>
    <hr></hr>
    <label className="filter-label">Filter trough books using book name</label>
      <input className="filter"
        placeholder="Enter a book name"
        onChange={(event) => handleFilter(event)}
        type="text"
      ></input>
    </>
  );
}

export default BookFilter;
