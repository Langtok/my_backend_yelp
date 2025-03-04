import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchSuggestion.module.css";

export function SearchSuggestion({ defaultLocation = "New York" }) {
  const navigate = useNavigate();
  const suggestions = ["Restaurants", "Coffee Shops", "Hotels", "Bars", "Gyms"];

  function handleClick(suggestion) {
    navigate(`/search/${encodeURIComponent(suggestion)}/${encodeURIComponent(defaultLocation)}`);
  }

  return (
    <div className={styles.suggestions}>
      <h3>Popular Searches</h3>
      <div className={styles.list}>
        {suggestions.map((item) => (
          <button 
            key={item} 
            onClick={() => handleClick(item)} 
            className={styles.suggestionButton} 
            aria-label={`Search for ${item} in ${defaultLocation}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
