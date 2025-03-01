import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
// import { Auth as _Auth } from "aws-amplify"; 
import { reviewsByBusinessID } from "../../graphql/queries";
import { ReviewCard } from "../Reviews/ReviewCard";
import styles from "./BusinessReview.module.css";

export function BusinessReviews({ businessID }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await API.graphql({
        query: reviewsByBusinessID,
        variables: { businessID },
      });
      setReviews(response.data.reviewsByBusinessID.items);
    }
    fetchReviews();
  }, [businessID]);

  return (
    <div className={styles.reviewsSection}>
      <h2>Customer Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => <ReviewCard key={review.id} review={review} />)
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
