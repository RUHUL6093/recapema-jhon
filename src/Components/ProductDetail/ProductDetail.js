import React from "react";
import { useParams } from "react-router-dom";
import Fakedata from "../../Fakedata";

const ProductDetail = () => {
  const { productkey } = useParams();

  const product = Fakedata.find((pd) => pd.key === productkey);
  console.log(product);
  return (
    <div>
      <h1> {productkey} comming soooooooonnnnnnnnnnn</h1>
    </div>
  );
};
export default ProductDetail;
