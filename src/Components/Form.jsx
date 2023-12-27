import React from "react";
import "../index.css";
import { useState } from "react";

export default function Form() {
  let [description, setDescription] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // setDescription(e.target.value);
    if(!description) return;
    const newItem ={
        description, quantity, packed:false,id:Date.now()
    }
    setItems([...items,newItem]);
    setDescription("");
    setQuantity(1);
    console.log(items);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
