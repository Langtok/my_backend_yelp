import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { createReview } from "../graphql/mutations";
import { BusinessReview } from "../components/business/BusinessReview";
import styles from "./ReviewPage.module.css";

export default function ReviewPage() {
  const { businessID } = useParams();
  const [business, setBusiness] = useState(null);
  const [reviewContent, setReviewContent] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const data = await API.graphql({
          query: getBusiness,
          variables: { id: businessID },
        });
        setBusiness(data.data.getBusiness);
      } catch (error) {
        console.error("Error fetching business:", error);
      }
    }
    fetchBusiness();
  }, [businessID]);

  async function handleReviewSubmit(e) {
    e.preventDefault();
    try {
      await API.graphql({
        query: createReview,
        variables: {
          input: {
            businessID,
            content: reviewContent,
            rating,
          },
        },
      });
      setReviewContent("");
      setRating(5);
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  }

  if (!business) return <p>Loading...</p>;

  return (
    <div className={styles.reviewPage}>
      <h1>Reviews for {business.name}</h1>
      <BusinessReview businessId={businessID} />

      <form className={styles.reviewForm} onSubmit={handleReviewSubmit}>
        <h3>Write a Review</h3>
        <textarea
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          placeholder="Write your review here..."
          required
        />
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <button type="submit" className="btn-primary">Submit Review</button>
      </form>
    </div>
  );
}
