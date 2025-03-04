import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { deleteBusiness } from "../../graphql/mutations";
import styles from "./DeleteBusiness.module.css";

export default function DeleteBusiness({ business }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleDelete() {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${business.name}"? This action cannot be undone.`
    );

    if (!confirmDelete) return;

    setLoading(true);
    setError("");

    try {
      const authUser = await Auth.currentAuthenticatedUser();
      if (business.owner !== authUser.username) {
        setError("You are not authorized to delete this business.");
        return;
      }

      // Delete image from S3 if exists
      if (business.imageUrl) {
        const fileName = business.imageUrl.split("/").pop(); // Extract file name
        await Storage.remove(`businessImages/${fileName}`);
      }

      // Delete business from database
      await API.graphql(graphqlOperation(deleteBusiness, { input: { id: business.id } }));

      alert("Business deleted successfully!");
      navigate("/");
    } catch (err) {
      setError("Failed to delete business.");
      console.error("Error deleting business:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.deleteBusinessContainer}>
      {error && <p className={styles.error}>{error}</p>}
      <button onClick={handleDelete} className="btn-danger" disabled={loading}>
        {loading ? "Deleting..." : "Delete Business"}
      </button>
    </div>
  );
}
