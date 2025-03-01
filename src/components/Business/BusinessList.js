import React from "react";
import { BusinessCard } from "./BusinessCard";
import styles from "./BusinessList.module.css";

export function BusinessList({ businesses }) {
  return (
    <div className={styles.businessList}>
      {businesses.length === 0 ? <p>No businesses found.</p> : businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
}
