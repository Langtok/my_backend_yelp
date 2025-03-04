import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchResultList } from "../components/Search/SearchResultList";
import { Filters } from "../components/Search/Filters";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const { term, location } = useParams();
  const [filters, setFilters] = useState({ category: "", rating: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [term, location, filters]);

  return (
    <div className={styles.searchPage}>
      <h2>
        Search results for "<strong>{term}</strong>" in "<strong>{location}</strong>"
      </h2>
      <Filters setFilters={setFilters} />
      {loading ? <p>Loading results...</p> : <SearchResultList term={term} location={location} filters={filters} />}
    </div>
  );
}
