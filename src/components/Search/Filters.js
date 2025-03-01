import React from "react";
import styles from "./Filters.module.css";

export function Filters({ setFilters }) {
  function handleFilterChange(e) {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className={styles.filters}>
      <label>Category:</label>
      <select name="category" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="restaurant">Restaurants</option>
        <option value="cafe">Cafes</option>
        <option value="hotel">Hotels</option>
      </select>

      <label>Minimum Rating:</label>
      <select name="rating" onChange={handleFilterChange}>
        <option value="0">All Ratings</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Stars
          </option>
        ))}
      </select>
    </div>
  );
}
