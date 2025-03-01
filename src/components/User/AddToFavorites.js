import React from "react";
import { API, Auth } from "aws-amplify";
import { createFavorite } from "../../graphql/mutations";
import styles from "./AddToFavorites.module.css";

export function AddToFavorites({ businessId }) {
  async function handleAddFavorite() {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      await API.graphql({
        query: createFavorite,
        variables: { input: { userID: authUser.username, businessID: businessId } },
      });
      alert("Added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  }

  return (
    <button onClick={handleAddFavorite} className={styles.addToFavorites}>
      Add to Favorites
    </button>
  );
}
