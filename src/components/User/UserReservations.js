import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listReservations } from "../../graphql/queries";
import styles from "./UserReservations.module.css";

export function UserReservations({ userID }) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      const response = await API.graphql({
        query: listReservations,
        variables: { filter: { userID: { eq: userID } } },
      });
      setReservations(response.data.listReservations.items);
    }
    fetchReservations();
  }, [userID]);

  return (
    <div className={styles.userReservations}>
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
