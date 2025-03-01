import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import { updateReview } from "../graphql/mutations";
import { getReview } from "../graphql/queries";

export default function EditReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({ content: "", rating: 0 });

  useEffect(() => {
    async function fetchReview() {
      try {
        const data = await API.graphql({
          query: getReview,
          variables: { id },
        });
        setReview(data.data.getReview);
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    }
    fetchReview();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await API.graphql({
        query: updateReview,
        variables: { input: { id, ...review } },
      });
      navigate(`/review/${id}`);
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  return (
    <div>
      <h1>Edit Review</h1>
      <textarea
        value={review.content}
        onChange={(e) => setReview({ ...review, content: e.target.value })}
      />
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}
