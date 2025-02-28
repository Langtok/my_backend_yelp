import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listReviews } from "../../graphql/queries";
import { ReviewCard } from "../Reviews/ReviewCard";
import styles from "./UserReviews.module.css";

export function UserReviews({ userID }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await API.graphql({
        query: listReviews,
        variables: { filter: { owner: { eq: userID } } },
      });
      setReviews(response.data.listReviews.items);
    }
    fetchReviews();
  }, [userID]);

  return (
    <div className={styles.userReviews}>
      <h2>My Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => <ReviewCard key={review.id} review={review} />)
      ) : (
        <p>No reviews written yet.</p>
      )}
    </div>
  );
}
