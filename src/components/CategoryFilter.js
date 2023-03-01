import React from "react";

function CategoryFilter({categories, selectedCategory, handleSelectedCategory}) {

  const categoryButton = categories.map((category, index) => (
    <button
    key={index}
    className={category === selectedCategory ? "selected" : undefined}
    onClick={() => handleSelectedCategory(category)}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
