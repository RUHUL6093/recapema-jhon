import React from "react";
import { useState } from "react";
import Fakedata from "../../Fakedata";
import Product from "../Product/Product";
import "./Shop.css";
function Shop() {
  const first10 = Fakedata.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    console.log("product added", product);
    const NewCart = [...cart, product];
    setCart(NewCart);
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
        <h5>Order Summery {cart.length} </h5>
      </div>
    </div>
  );
}
export default Shop;
