import React, { useState, useEffect } from 'react';
import { CoffeeDrink } from '../models/FrontCoffeeModel.ts';
import CoffeeCard from './CoffeeCard.tsx'
import CoffeeFinder from './CoffeeFinder.tsx';

const Coffee: React.FC = () => {
  const [products, setProducts] = useState<CoffeeDrink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [term, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:2500/api/coffee-drinks");
      if (!res.ok) {
        throw new Error("Request to the backend failed");
      }
      const resData = await res.json();
      const data = resData.data; // Access the data array from the backend

      setProducts(data);
      setLoading(false);
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (error: any) => {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError("An unidentified error occurred");
    }
    console.error(error);
    setLoading(false);
  };

  const updateSearch = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayedProducts = getDisplayedProducts(products, term);

  return (
    <>
      <div className="top-container">
        <h1>Find the best<br /><span>Coffee</span> for you</h1>
        <CoffeeFinder handleInputChange={updateSearch} />
      </div>
      <div className="grid-container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : displayedProducts.length > 0 ? (
          displayedProducts.map((coffeeDrink) => (
            <CoffeeCard key={coffeeDrink.id} drink={coffeeDrink} />
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </>
  );
};

const getDisplayedProducts = (products: CoffeeDrink[], term: string) => {
  if (term) {
    return products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
  }
  return [...products];
};

export default Coffee;