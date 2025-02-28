import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listReservations } from "../graphql/queries";
import styles from "./ReservationsPage.module.css";

export function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql({
        query: listReservations,
        variables: { filter: { userID: { eq: user.username } } },
      });
      setReservations(response.data.listReservations.items);
    }
    fetchReservations();
  }, []);

  return (
    <div className={styles.reservationsPage}>
      <h2>My Reservations</h2>
      {reservations.length > 0 ? (
        reservations.map((res) => (
          <div key={res.id} className={styles.reservationCard}>
            <p>📅 {new Date(res.dateTime).toLocaleString()}</p>
            <p>Status: {res.status}</p>
          </div>
        ))
      ) : (
        <p>No reservations made yet.</p>
      )}
    </div>
  );
}
