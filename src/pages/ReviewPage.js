import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import { createReview } from "../graphql/mutations";
import styles from "./ReviewPage.module.css";

export function ReviewPage() {
  const { businessID } = useParams();
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await Auth.currentAuthenticatedUser();
    await API.graphql({
      query: createReview,
      variables: {
        input: {
          content,
          rating,
          businessID,
          owner: user.username,
          helpfulVotes: 0,
        },
      },
    });
    alert("Review submitted!");
  }

  return (
    <div className={styles.reviewPage}>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>{num} Stars</option>
          ))}
        </select>
        <label>Review:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
