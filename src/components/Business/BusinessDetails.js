import React from "react";
import styles from "./BusinessDetails.module.css";

export function BusinessDetails({ business }) {
  return (
    <div className={styles.businessDetails}>
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>Phone: {business.phone}</p>
      <p>Category: {business.category}</p>
      <p>⭐ {business.rating} ({business.reviewCount} reviews)</p>
    </div>
  );
}
