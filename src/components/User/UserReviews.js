import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listReviews, deleteReview } from "../../graphql/mutations";
import styles from "./UserReviews.module.css";

export function UserReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const data = await API.graphql({
          query: listReviews,
          variables: { filter: { userID: { eq: authUser.username } } },
        });
        setReviews(data.data.listReviews.items);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, []);

  async function handleDeleteReview(id) {
    try {
      await API.graphql({
        query: deleteReview,
        variables: { input: { id } },
      });
      setReviews(reviews.filter((review) => review.id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  }

  return (
    <div className={styles.reviewsPage}>
      <h2>Your Reviews</h2>
      {reviews.length === 0 ? <p>No reviews submitted yet.</p> : (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              <span>{review.business.name} - ⭐ {review.rating}</span>
              <p>{review.content}</p>
              <button onClick={() => handleDeleteReview(review.id)} className="btn-secondary">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
