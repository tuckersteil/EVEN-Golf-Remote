import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const FilterBar = ({ categories, subcategories, handleFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
console.log(categories)

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory(''); // Reset subcategory selection when category changes
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const handleApplyFilter = () => {
    handleFilter(selectedCategory, selectedSubcategory);
  };

  if (selectedCategory === "Mirrors"){
    subcategories = ['Acrylic', 'Stainless Steel & Plating', 'Iron', 'Leather', 'Mirror Frame', 'Panel', 'Traditional & Transiotional']
  }
  if (selectedCategory === 'Light Fixtures'){
    subcategories = ['Pendant', 'Sconce', 'Flush Mount', 'Recessed', 'Under Cabinet']
  }
  if (selectedCategory === 'Glass Railing Systems'){
    subcategories = ['Indoor', 'Outdoor']
  }
  if (selectedCategory === 'Windows'){
    subcategories = ['Tempered', 'Laminated']
  }
  if (selectedCategory === 'Medicine Cabinets'){
    subcategories = ['Illuminated', 'Non-illuminated']
  }
  if (selectedCategory === 'Cabinet Pulls and Handles'){
    subcategories = []
  }
  if (selectedCategory === 'Shower Glass Enclosures'){
    subcategories = []
  }
  if (selectedCategory === 'Bathroom Accessories'){
    subcategories = ['Towel Bars', 'Grab Bars', 'Toilet Paper Holders', 'Robe Hooks']
  }
  if (selectedCategory === 'Window Shades'){
    subcategories = ['Manual', 'Electric']
  }
  if (selectedCategory === 'Solid Wood Doors'){
    subcategories = ["With Frame", "Without Frame", "Interior"]
  }
  if (selectedCategory === 'Plumbing Fixtures'){
    subcategories = ['Sinks', 'Faucets', 'Showers']
  }


  return (
    <div className='filterBar'>
      <FormControl variant="outlined" sx={{ minWidth: 200, marginRight: 10 }}>
        <InputLabel>Category</InputLabel>
        <Select value={selectedCategory} onChange={handleCategoryChange} label="Category">
          <MenuItem value="">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 200, marginRight: 10 }}>
        <InputLabel>Subcategory</InputLabel>
        <Select value={selectedSubcategory} onChange={handleSubcategoryChange} label="Subcategory">
          <MenuItem value="">All</MenuItem>
          {subcategories.map((subcategory) => (
            <MenuItem key={subcategory} value={subcategory}>
              {subcategory}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleApplyFilter}>
        Apply Filter
      </Button>
    </div>
  );
};

export default FilterBar;
