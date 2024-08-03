import React, { useContext } from "react";
import { SimilarContext } from "./Context/similarContext";
import ProductCard from "./Cards/productCard";

const SimilarProduct = () => {
  const { similarData, loading, error } = useContext(SimilarContext);
  if (loading) {
    <p>loading...</p>;
  }
  if (error) {
    <p>error message : {error.message}</p>;
  }
  return (
    <div>
      {similarData.map((value, index) => (
        <ProductCard key={index} product={value} />
      ))}
    </div>
  );
};

export default SimilarProduct;
