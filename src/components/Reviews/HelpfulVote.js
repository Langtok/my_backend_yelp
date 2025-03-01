import React, { useState } from "react";
import { API } from "aws-amplify";
import { Auth as _Auth } from "aws-amplify"; 
import { updateReview } from "../../graphql/mutations";
import styles from "./HelpfulVote.module.css";

export function HelpfulVote({ review }) {
  const [helpfulVotes, setHelpfulVotes] = useState(review.helpfulVotes);

  async function handleVote() {
    const newVotes = helpfulVotes + 1;
    await API.graphql({
      query: updateReview,
      variables: { input: { id: review.id, helpfulVotes: newVotes } },
    });
    setHelpfulVotes(newVotes);
  }

  return (
    <button onClick={handleVote} className={styles.voteButton}>
      👍 Helpful ({helpfulVotes})
    </button>
  );
}
