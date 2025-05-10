import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

const Meals = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch meals.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading meals...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="items-container">
      {items.map(({ strMeal, strMealThumb, idMeal }) => (
        <article className="card" key={idMeal}>
          <img src={strMealThumb} alt={strMeal} />
          <div className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Meals;
