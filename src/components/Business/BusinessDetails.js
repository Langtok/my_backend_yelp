import React from "react";
import { ItemRating } from "../Common/ItemRating";
import styles from "./BusinessDetails.module.css";

export function BusinessDetails({ business }) {
  return (
    <div className={styles.businessDetails}>
      <img src={business.images[0]} alt={business.name} className={styles.coverImage} />
      <div className={styles.details}>
        <h1>{business.name}</h1>
        <ItemRating rating={business.rating} />
        <p>{business.category}</p>
        <p>{business.address}</p>
        <p>📞 {business.phoneNumber}</p>
        <a href={business.website} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </div>
  );
}
