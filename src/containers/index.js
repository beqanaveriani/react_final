import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProducts } from "../api";
import Header from "../components/header";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await await getProducts();
        setProducts(result.data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <div className="home">
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <div>
            {products.map((p) => (
              <div key={p.barcode}>{p.barcode}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
