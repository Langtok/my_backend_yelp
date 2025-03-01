import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchSuggestion.module.css";

export function SearchSuggestion() {
  const navigate = useNavigate();
  const suggestions = ["Restaurants", "Coffee Shops", "Hotels", "Bars", "Gyms"];

  function handleClick(suggestion) {
    navigate(`/search/${suggestion}/New York`);
  }

  return (
    <div className={styles.suggestions}>
      <h3>Popular Searches</h3>
      <div className={styles.list}>
        {suggestions.map((item) => (
          <button key={item} onClick={() => handleClick(item)} className="btn-secondary">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
