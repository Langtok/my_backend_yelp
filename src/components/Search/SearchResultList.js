import React from "react";
import { SearchResult } from "./SearchResult";
import styles from "./SearchResultList.module.css";

export function SearchResultList({ businesses, loading }) {
  if (loading) return <p className={styles.loading}>Loading results...</p>;

  return (
    <div className={styles.searchResultList}>
      {businesses.length === 0 ? (
        <p className={styles.noResults}>No results found.</p>
      ) : (
        businesses.map((business) => <SearchResult key={business.id} business={business} />)
      )}
    </div>
  );
}
