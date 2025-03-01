import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import { getReview } from "../graphql/queries";
import { updateReview } from "../graphql/mutations";
import styles from "./EditReviewPage.module.css";

export default function EditReviewPage() {
  const { reviewID } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({ content: "", rating: 0 });

  useEffect(() => {
    async function fetchReview() {
      try {
        const data = await API.graphql({
          query: getReview,
          variables: { id: reviewID },
        });
        setReview(data.data.getReview);
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    }
    fetchReview();
  }, [reviewID]);

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await API.graphql({
        query: updateReview,
        variables: { input: { id: reviewID, ...review } },
      });
      alert("Review updated successfully!");
      navigate(`/review/${reviewID}`);
    } catch (error) {
      console.error("Error updating review:", error);
    }
  }

  return (
    <div className={styles.editReviewPage}>
      <h1>Edit Your Review</h1>
      <form className={styles.editReviewForm} onSubmit={handleUpdate}>
        <textarea
          value={review.content}
          onChange={(e) => setReview({ ...review, content: e.target.value })}
          placeholder="Update your review..."
          required
        />
        <label>Rating:</label>
        <select value={review.rating} onChange={(e) => setReview({ ...review, rating: Number(e.target.value) })}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button type="submit" className="btn-primary">Save Changes</button>
      </form>
    </div>
  );
}
