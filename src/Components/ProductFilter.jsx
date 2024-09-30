import React, { useState } from "react";
import Product from "../Product.json";
import "../ProductFilter.css";

export default function ProductFilter() {
  console.log(Product);
  const [items, setItems] = useState(Product);

  const filterItems = (catItem) => {
    const updateItems = Product.filter((curItem) => {
        return(
            curItem.category === catItem
        )
    });
    setItems(updateItems);

  }

  return (
    <div className="container mt-5">
      <h1>All Products</h1>
      <div className="button-container mb-4 mt-3">
        <button className="btn btn-danger me-3" onClick={() => setItems(Product)}>All Products</button>
        <button className="btn btn-danger me-3" onClick={() => filterItems("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-danger me-3" onClick={() => filterItems("women's clothing")}>Women's clothings</button>
        <button className="btn btn-danger me-3" onClick={() => filterItems("jewelery")}>Jewelery</button>
        <button className="btn btn-danger me-3" onClick={() => filterItems("electronics")}>Electronics</button>
      </div>

      <div className="row">
        {items.map((value) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card">
                <img src={value.image} alt="" className="img" />
                <div className="card-body">
                  <h5 className="text">
                    {value.title.substring(0, 15)}
                    <span className="badge bg-secondary">{value.category}</span>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
