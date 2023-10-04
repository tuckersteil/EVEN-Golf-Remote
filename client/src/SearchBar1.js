import React from 'react';

function SearchBar() {
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Performing search...');
  };

  return (
    <div className="search-bar1">
      <div className="search-input-container1">
        <input type="text" placeholder="Search Marketplace" className="search-input1" />
        <i class="fas fa-search search-icon1"></i>
        <i className="fas fa-search search-icon1" onClick={handleSearch}></i>
      </div>
    </div>
  );
}

export default SearchBar;
