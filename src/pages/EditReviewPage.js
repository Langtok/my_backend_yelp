import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import { getReview, updateReview } from "../graphql/mutations";
import styles from "./EditReviewPage.module.css";

export function EditReviewPage() {
  const { reviewID } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    async function fetchReview() {
      const response = await API.graphql({
        query: getReview,
        variables: { id: reviewID },
      });
      const review = response.data.getReview;
      setContent(review.content);
      setRating(review.rating);
    }
    fetchReview();
  }, [reviewID]);

  async function handleUpdate(e) {
    e.preventDefault();
    await API.graphql({
      query: updateReview,
      variables: { input: { id: reviewID, content, rating } },
    });
    alert("Review updated!");
    navigate(-1);
  }

  return (
    <div className={styles.editReviewPage}>
      <h2>Edit Your Review</h2>
      <form onSubmit={handleUpdate}>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>{num} Stars</option>
          ))}
        </select>
        <label>Review:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <button type="submit">Update Review</button>
      </form>
    </div>
  );
}
