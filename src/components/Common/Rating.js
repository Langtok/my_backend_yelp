import React from "react";
import { ItemRating } from "./ItemRating";
import styles from "./Rating.module.css";

export function Rating({ rating }) {
  return (
    <div className={styles.ratingWrapper}>
      <ItemRating rating={rating} />
      <span className={styles.ratingText}>{rating.toFixed(1)}</span>
    </div>
  );
}
