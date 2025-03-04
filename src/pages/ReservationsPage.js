import React, { useEffect, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listReservations } from "../graphql/queries";
import { deleteReservation } from "../graphql/mutations";
import styles from "./ReservationsPage.module.css";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const response = await API.graphql(
          graphqlOperation(listReservations, {
            filter: { userID: { eq: authUser.username } },
          })
        );

        setReservations(response.data.listReservations.items);
      } catch (error) {
        console.error("Error fetching reservations:", error);
        setError("Failed to load reservations.");
      } finally {
        setLoading(false);
      }
    }

    fetchReservations();
  }, []);

  async function handleCancelReservation(id) {
    try {
      await API.graphql(graphqlOperation(deleteReservation, { input: { id } }));
      setReservations(reservations.filter((res) => res.id !== id));
      alert("Reservation canceled successfully.");
    } catch (error) {
      console.error("Error canceling reservation:", error);
      setError("Failed to cancel reservation.");
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.reservationsPage}>
      <h1>Your Reservations</h1>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul className={styles.reservationList}>
          {reservations.map((res) => (
            <li key={res.id} className={styles.reservationItem}>
              <span>
                {res.business.name} - {res.date} at {res.time}
              </span>
              <button onClick={() => handleCancelReservation(res.id)} className="btn-secondary">
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
