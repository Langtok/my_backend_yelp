import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { Auth as _Auth } from "aws-amplify"; 
import { listBusinesses } from "../../graphql/queries";
import { SearchResult } from "./SearchResult";
import styles from "./SearchResultList.module.css";

export function SearchResultList({ term, location, filters }) {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    async function fetchBusinesses() {
      const response = await API.graphql({ query: listBusinesses });
      setBusinesses(response.data.listBusinesses.items);
    }
    fetchBusinesses();
  }, []);

  return (
    <div className={styles.resultsContainer}>
      {businesses
        .filter((b) => b.name.toLowerCase().includes(term.toLowerCase()))
        .map((business) => (
          <SearchResult key={business.id} business={business} />
        ))}
    </div>
  );
}
