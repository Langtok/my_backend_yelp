import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getReview } from "../graphql/queries";

export default function ReviewPage() {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    async function fetchReview() {
      try {
        const data = await API.graphql({ query: getReview, variables: { id } });
        setReview(data.data.getReview);
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    }
    fetchReview();
  }, [id]);

  if (!review) return <p>Loading...</p>;

  return (
    <div>
      <h1>Review</h1>
      <p>{review.content}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
}
