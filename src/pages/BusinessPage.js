import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { BusinessHeader } from "../components/Business/BusinessHeader";
import { BusinessReview } from "../components/Business/BusinessReview";
import { BusinessReservation } from "../components/Business/BusinessReservation";
import styles from "./BusinessPage.module.css";

export default function BusinessPage() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await API.graphql(graphqlOperation(getBusiness, { id }));
        setBusiness(response.data.getBusiness);
      } catch (error) {
        console.error("Error fetching business:", error);
        setError("Failed to load business details.");
      } finally {
        setLoading(false);
      }
    }
    fetchBusiness();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!business) return <p>No business found.</p>;

  return (
    <div className={styles.businessPage}>
      <BusinessHeader business={business} />
      <BusinessReservation businessId={id} />
      <BusinessReview businessId={id} />
    </div>
  );
}
