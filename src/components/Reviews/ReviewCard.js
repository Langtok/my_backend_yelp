import React from "react";
import styles from "./ReviewCard.module.css";

export function ReviewCard({ review }) {
  return (
    <div className={styles.reviewCard}>
      <p className={styles.rating}>⭐ {review.rating}/5</p>
      <p className={styles.content}>{review.content}</p>
      <p className={styles.owner}>By: {review.owner}</p>
    </div>
  );
}
