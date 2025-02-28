import React from "react";
import styles from "./Rating.module.css";

export function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className={styles.star}>⭐</span>
      ))}
      {halfStar && <span className={styles.star}>⭐️</span>}
      <span className={styles.ratingText}>({rating.toFixed(1)})</span>
    </div>
  );
}
