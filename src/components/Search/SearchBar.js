import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onSearch) {
      onSearch(term, location);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search for restaurants, services..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
