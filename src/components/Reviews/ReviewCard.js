import React from "react";
import { Rating } from "../Common/Rating";
import { HelpfulVote } from "./HelpfulVote";
import styles from "./ReviewCard.module.css";

export function ReviewCard({ review }) {
  return (
    <div className={styles.reviewCard}>
      <h3>{review.user.name}</h3>
      <Rating rating={review.rating} />
      <p>{review.content}</p>
      <HelpfulVote reviewId={review.id} votes={review.helpfulVotes} />
    </div>
  );
}
