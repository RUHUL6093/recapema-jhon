import React from "react";
import { useState } from "react";
import Fakedata from "../../Fakedata";
import Product from "../Product/Product";
import "./Shop.css";
function Shop() {
  const first10 = Fakedata.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const handleAddProduct = () => {
    console.log("product added");
  };

  return (
    <div className="Shop-container">
      <div className="Product-container">
        {" "}
        {products.map((product) => (
          <Product
            product={product}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>this is cart </h3>
      </div>
    </div>
  );
}
export default Shop;
