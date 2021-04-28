import React from "react";
import { useState } from "react";
import Fakedata from "../../Fakedata";
import "./Shop.css";
const Shop = () => {
  const first10 = Fakedata.slice(0, 10);
  const [products, setProducts] = useState(first10);

  return (
    <div className="Shop-container">
      <div className="Product-container">
        {" "}
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <h3>this is cart </h3>
      </div>
    </div>
  );
};
export default Shop;
