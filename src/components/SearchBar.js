import React from 'react';

const SearchBar = () => {
  return (
    // Added search-bar-container class here
    <div className="search-bar-container">
      <input type="text" placeholder="Search by country, account ID, or vendor" />
    </div>
  );
};

export default SearchBar;
