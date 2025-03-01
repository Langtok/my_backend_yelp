import React, { useState } from "react";
import { API } from "aws-amplify";
import { createReservation } from "../../graphql/mutations";
import styles from "./BusinessReservation.module.css";

export function BusinessReservation({ businessId }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  async function handleReservation(e) {
    e.preventDefault();
    try {
      await API.graphql({
        query: createReservation,
        variables: { input: { businessId, date, time } },
      });
      alert("Reservation successful!");
    } catch (error) {
      console.error("Error making reservation:", error);
    }
  }

  return (
    <form className={styles.reservationForm} onSubmit={handleReservation}>
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      
      <label>Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      
      <button type="submit" className="btn-primary">Reserve</button>
    </form>
  );
}
