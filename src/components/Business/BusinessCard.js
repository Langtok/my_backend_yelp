import React from "react";
import { Link } from "react-router-dom";
import { ItemRating } from "../Common/ItemRating";
import styles from "./BusinessCard.module.css";

export function BusinessCard({ business }) {
  return (
    <div className={styles.businessCard}>
      <Link to={`/business/${business.id}`}>
        <img src={business.images[0]} alt={business.name} className={styles.image} />
      </Link>
      <div className={styles.info}>
        <h3>{business.name}</h3>
        <ItemRating rating={business.rating} />
        <p>{business.category}</p>
        <p>{business.address}</p>
      </div>
    </div>
  );
}
