import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })

  function onFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    onItemFormSubmit(formData);

    //reset form
    setFormData({
      id: uuid(),
      name: "",
      category: "Produce",
    });

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={onFormChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={onFormChange} >
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
