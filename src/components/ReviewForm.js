import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
import { createReview } from "../graphql/mutations.ts";
import { useState } from "react";

function ReviewForm({ businessID, user }) {
  if (!user) return <p>You must be signed in to leave a review.</p>;

  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Amplify.API.graphql({
      query: createReview,
      variables: { input: { content, rating, businessID } },
    });
    alert("Review added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea onChange={(e) => setContent(e.target.value)} placeholder="Write a review..." />
      <input type="number" min="1" max="5" onChange={(e) => setRating(Number(e.target.value))} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
