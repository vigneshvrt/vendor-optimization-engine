import React from 'react';

// Accept searchTerm and onSearchChange as props
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by country, account ID, or vendor"
        value={searchTerm} // Controlled input
        onChange={onSearchChange} // Handle changes
      />
    </div>
  );
};

export default SearchBar;
