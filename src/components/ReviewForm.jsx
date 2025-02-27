import React from "react";

function ReviewForm({ businessID, user }) {
  return (
    <form>
      <textarea placeholder="Write a review..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
