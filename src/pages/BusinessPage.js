import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { getBusiness } from "../graphql/queries";
import { BusinessHeader } from "../components/Business/BusinessHeader";
import { BusinessReviews } from "../components/Business/BusinessReview";
import { BusinessReservation } from "../components/Business/BusinessReservation";
import styles from "./BusinessPage.module.css";

export function BusinessPage() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      const response = await API.graphql({ query: getBusiness, variables: { id } });
      setBusiness(response.data.getBusiness);
    }
    fetchBusiness();
  }, [id]);

  if (!business) return <p>Loading...</p>;

  return (
    <div className={styles.businessPage}>
      <BusinessHeader business={business} />
      <BusinessReviews businessID={id} />
      <BusinessReservation businessID={id} />
    </div>
  );
}
