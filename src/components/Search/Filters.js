import React from "react";
import styles from "./Filters.module.css";

export function Filters({ setFilters }) {
  function handleFilterChange(e) {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className={styles.filterContainer}>
      <label>Category:</label>
      <select name="category" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Restaurant">Restaurants</option>
        <option value="Services">Services</option>
      </select>

      <label>Rating:</label>
      <select name="rating" onChange={handleFilterChange}>
        <option value="0">All</option>
        <option value="4">4★ & up</option>
        <option value="3">3★ & up</option>
      </select>
    </div>
  );
}
