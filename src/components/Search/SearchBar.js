import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (term && location) {
      navigate(`/search/${term}/${location}`);
    }
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for businesses..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit" className="btn-primary">Search</button>
    </form>
  );
}
