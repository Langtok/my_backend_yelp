import React from "react";
import { ReviewCard } from "../Reviews/ReviewCard";
import styles from "./BusinessReview.module.css";

export function BusinessReview({ reviews }) {
  return (
    <div className={styles.businessReview}>
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? <p>No reviews yet.</p> : reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
