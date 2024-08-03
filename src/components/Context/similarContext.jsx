import React, { createContext, useEffect, useState } from "react";

export const SimilarContext = createContext();

const SimilarContextProvider = ({ children, similarId }) => {
  const [similarData, setSimilarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSimilarData = async (similarId) => {
      try {
        const fetchData = await fetch(`/api/v1/products/${similarId}/similar`);
        const response = await fetchData.json();
        setSimilarData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (similarId) {
      getSimilarData(similarId);
    }
  }, [similarId]);

  return (
    <SimilarContext.Provider value={{ similarData, loading, error }}>
      {children}
    </SimilarContext.Provider>
  );
};

export default SimilarContextProvider;
