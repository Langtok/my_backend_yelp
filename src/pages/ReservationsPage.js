import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listReservations } from "../graphql/queries";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const data = await API.graphql({ query: listReservations });
        setReservations(data.data.listReservations.items);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    }
    fetchReservations();
  }, []);

  return (
    <div>
      <h1>Your Reservations</h1>
      <ul>
        {reservations.map((res) => (
          <li key={res.id}>{res.business.name} - {res.dateTime}</li>
        ))}
      </ul>
    </div>
  );
}
