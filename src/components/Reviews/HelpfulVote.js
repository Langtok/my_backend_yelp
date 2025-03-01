import React, { useState } from "react";
import { API } from "aws-amplify";
import { updateReview } from "../../graphql/mutations";
import styles from "./HelpfulVote.module.css";

export function HelpfulVote({ reviewId, votes }) {
  const [helpfulVotes, setHelpfulVotes] = useState(votes);

  async function handleVote() {
    try {
      const updatedVotes = helpfulVotes + 1;
      await API.graphql({
        query: updateReview,
        variables: { input: { id: reviewId, helpfulVotes: updatedVotes } },
      });
      setHelpfulVotes(updatedVotes);
    } catch (error) {
      console.error("Error updating votes:", error);
    }
  }

  return (
    <div className={styles.helpfulVote}>
      <button onClick={handleVote} className="btn-secondary">
        Helpful ({helpfulVotes})
      </button>
    </div>
  );
}
