import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { BusinessHeader } from "../components/business/BusinessHeader";
import { BusinessReview } from "../components/business/BusinessReview";
import { BusinessReservation } from "../components/business/BusinessReservation";
import styles from "./BusinessPage.module.css";

export default function BusinessPage() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const data = await API.graphql({
          query: getBusiness,
          variables: { id },
        });
        setBusiness(data.data.getBusiness);
      } catch (error) {
        console.error("Error fetching business:", error);
      }
    }
    fetchBusiness();
  }, [id]);

  if (!business) return <p>Loading...</p>;

  return (
    <div className={styles.businessPage}>
      <BusinessHeader business={business} />
      <BusinessReservation businessId={id} />
      <BusinessReview businessId={id} />
    </div>
  );
}
