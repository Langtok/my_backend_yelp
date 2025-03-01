import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { Auth as _Auth } from "aws-amplify"; 
import { listBusinesses } from "../../graphql/queries";
import { BusinessCard } from "./BusinessCard";
import styles from "./BusinessList.module.css";

export function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    async function fetchBusinesses() {
      const response = await API.graphql({ query: listBusinesses });
      setBusinesses(response.data.listBusinesses.items);
    }
    fetchBusinesses();
  }, []);

  return (
    <div className={styles.businessList}>
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
}
