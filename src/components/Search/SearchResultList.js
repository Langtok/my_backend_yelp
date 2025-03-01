import React from "react";
import { SearchResult } from "./SearchResult";
import styles from "./SearchResultList.module.css";

export function SearchResultList({ businesses }) {
  return (
    <div className={styles.searchResultList}>
      {businesses.length === 0 ? <p>No results found.</p> : businesses.map((business) => (
        <SearchResult key={business.id} business={business} />
      ))}
    </div>
  );
}
