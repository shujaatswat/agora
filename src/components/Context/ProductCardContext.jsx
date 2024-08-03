// ProductCardContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const ProductCardContext = createContext();

// Create a provider component
export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await fetch("/api/v1/products");
        const productResult = await productResponse.json();
        setProductData(productResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(productData);
  }, []);

  return (
    <ProductCardContext.Provider value={{ productData, loading }}>
      {children}
    </ProductCardContext.Provider>
  );
};
