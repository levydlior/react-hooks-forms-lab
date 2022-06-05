import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formState, setFormState] = useState({
    name: "",
    category: "Produce",

  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormState({
      ...formState,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: formState.name,
      category: formState.category
    };

    setFormState({
      name: "",
      category: "",
    });

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formState.category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
