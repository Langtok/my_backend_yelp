import React, { useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createReservation } from "../../graphql/mutations";
import styles from "./BusinessReservation.module.css";

export function BusinessReservation({ businessId }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleReservation(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const authUser = await Auth.currentAuthenticatedUser();

      await API.graphql(
        graphqlOperation(createReservation, {
          input: {
            businessID: businessId,
            userID: authUser.username,
            date,
            time,
          },
        })
      );

      setSuccess("Reservation successful!");
      setDate("");
      setTime("");
    } catch (error) {
      console.error("Error making reservation:", error);
      setError("Failed to make a reservation. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.reservationForm} onSubmit={handleReservation}>
      <h3>Book a Reservation</h3>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label>Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Booking..." : "Reserve"}
      </button>
    </form>
  );
}
