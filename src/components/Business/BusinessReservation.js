import React, { useState } from "react";
import { API } from "aws-amplify";
import { createReservation } from "../../graphql/mutations";
import styles from "./BusinessReservation.module.css";

export function BusinessReservation({ businessID }) {
  const [dateTime, setDateTime] = useState("");
  const [status, setStatus] = useState("pending");

  async function handleReservation() {
    await API.graphql({
      query: createReservation,
      variables: { input: { businessID, dateTime, status } },
    });
    alert("Reservation submitted!");
  }

  return (
    <div className={styles.reservationSection}>
      <h2>Make a Reservation</h2>
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleReservation} className={styles.reserveBtn}>
        Book Now
      </button>
    </div>
  );
}
