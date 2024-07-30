import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const featureContext = createContext();

const FeatureContextProvider = ({ children }) => {
  const [featureData, setFeatureData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatureData = async () => {
      try {
        const featureResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
        const featureResult = await featureResponse.json();
        setFeatureData(featureResult);
      } catch (error) {
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatureData();
  }, []);
  return (
    <featureContext.Provider value={{ featureData, error, loading }}>
      {children}
    </featureContext.Provider>
  );
};

export default FeatureContextProvider;
