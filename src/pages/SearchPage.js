import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResultList } from "../components/Search/SearchResultList";
import { Filters } from "../components/Search/Filters";
import styles from "./SearchPage.module.css";

export function SearchPage() {
  const { term, location } = useParams();
  const [filters, setFilters] = useState({ category: "", rating: 0 });

  return (
    <div className={styles.searchPage}>
      <h2>
        Search results for "<strong>{term}</strong>" in "<strong>{location}</strong>"
      </h2>
      <Filters setFilters={setFilters} />
      <SearchResultList term={term} location={location} filters={filters} />
    </div>
  );
}
