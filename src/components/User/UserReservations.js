import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listReservations, deleteReservation } from "../../graphql/mutations";
import styles from "./UserReservations.module.css";

export function UserReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const data = await API.graphql({
          query: listReservations,
          variables: { filter: { userID: { eq: authUser.username } } },
        });
        setReservations(data.data.listReservations.items);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    }
    fetchReservations();
  }, []);

  async function handleCancelReservation(id) {
    try {
      await API.graphql({
        query: deleteReservation,
        variables: { input: { id } },
      });
      setReservations(reservations.filter((res) => res.id !== id));
    } catch (error) {
      console.error("Error canceling reservation:", error);
    }
  }

  return (
    <div className={styles.reservationsPage}>
      <h2>Your Reservations</h2>
      {reservations.length === 0 ? <p>No reservations found.</p> : (
        <ul className={styles.reservationList}>
          {reservations.map((res) => (
            <li key={res.id} className={styles.reservationItem}>
              <span>{res.business.name} - {res.date} at {res.time}</span>
              <button onClick={() => handleCancelReservation(res.id)} className="btn-secondary">Cancel</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
