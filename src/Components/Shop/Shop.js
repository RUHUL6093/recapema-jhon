import React from "react";
import { useState } from "react";
import Fakedata from "../../Fakedata";
import Cart from "../Cart/cart";
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}
export default Shop;
