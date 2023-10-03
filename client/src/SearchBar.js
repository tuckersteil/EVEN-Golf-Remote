import React from 'react';

function SearchBar() {
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Performing search...');
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input type="text" placeholder="Search name, brand, category..." className="search-input" />
        <i className="fas fa-search search-icon" onClick={handleSearch}></i>
      </div>
    </div>
  );
}

export default SearchBar;