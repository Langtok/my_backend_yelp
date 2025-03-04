import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listReviews } from "../../graphql/queries";
import { ReviewCard } from "../Reviews/ReviewCard";
import styles from "./BusinessReview.module.css";

export function BusinessReview({ businessId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await API.graphql(
          graphqlOperation(listReviews, {
            filter: { businessID: { eq: businessId } },
          })
        );
        setReviews(response.data.listReviews.items);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [businessId]);

  if (loading) return <p className={styles.loading}>Loading reviews...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.businessReview}>
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className={styles.noReviews}>No reviews yet.</p>
      ) : (
        reviews.map((review) => <ReviewCard key={review.id} review={review} />)
      )}
    </div>
  );
}
