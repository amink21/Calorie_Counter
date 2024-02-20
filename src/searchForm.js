import React, { useState } from 'react';

const SearchForm = ({ onSearch, onClear }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add trim() method to remove whitespace characters
    const trimmedInput = input.trim();
    if (!trimmedInput) {
        alert('Please enter a search term.');
        return;
    }
    // Pass trimmed input to the search function
    onSearch(trimmedInput);
  };

  const handleClear = () => {
    setInput('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className = "search-input" type="text" value={input} onChange={handleChange} placeholder="Enter food description..." />
      <button type="submit" className="search-button">Search</button>
      <button type="button" onClick={handleClear} className="clear-button">Clear</button>
    </form>
  );
};


export default SearchForm;
