import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listBusinesses } from "../graphql/queries";
import { deleteBusiness } from "../graphql/mutations";
import { BusinessCard } from "../components/Business/BusinessCard";
import { useNavigate } from "react-router-dom";
import styles from "./BusinessesPage.module.css";

export default function BusinessesPage() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBusinesses() {
      setLoading(true);
      setError(null);

      try {
        // Get authenticated user ID
        const authUser = await Auth.currentAuthenticatedUser();
        setUserId(authUser.attributes.sub);

        // Fetch businesses with API key authentication
        const response = await API.graphql({
          query: listBusinesses,
          authMode: "API_KEY",
        });

        console.log("Fetched businesses:", response);

        if (response.data?.listBusinesses?.items) {
          setBusinesses(response.data.listBusinesses.items);
        } else {
          setError("No businesses found.");
        }
      } catch (err) {
        console.error("Error fetching businesses:", err);
        setError(`Failed to load businesses: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchBusinesses();
  }, []);

  async function handleDelete(businessId) {
    try {
      await API.graphql({
        query: deleteBusiness,
        variables: { input: { id: businessId } },
      });

      // Remove deleted business from UI
      setBusinesses((prevBusinesses) =>
        prevBusinesses.filter((b) => b.id !== businessId)
      );

      alert("Business deleted successfully!");
    } catch (err) {
      console.error("Error deleting business:", err);
      alert("Failed to delete business.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading businesses...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.businessesPage}>
      <h1>All Businesses</h1>
      {businesses.length === 0 ? (
        <p className={styles.noBusinesses}>No businesses found.</p>
      ) : (
        <div className={styles.businessList}>
          {businesses.map((business) => (
            <div key={business.id} className={styles.businessCard}>
              <BusinessCard business={business} />

              {/* Only show Edit/Delete buttons if user is the owner */}
              {userId === business.owner && (
                <div className={styles.businessActions}>
                  <button
                    className={styles.editBtn}
                    onClick={() => navigate(`/edit-business/${business.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(business.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
