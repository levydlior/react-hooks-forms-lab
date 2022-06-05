import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchChange, setSearchChange] = useState("");
  const [itemsArray, setItemsArray] = useState(items)

  function reFetchItems(newItem){
    setItemsArray([
      ...itemsArray,newItem
    ])
  }

  function handleSearchChange(newSearchInput) {
    setSearchChange(newSearchInput);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemsArray.filter((item) => {
    if (item.name.toLowerCase().includes(searchChange)) {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={reFetchItems}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
