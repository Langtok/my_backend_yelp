import React, { useState, useEffect } from "react";
import { API, Auth } from "aws-amplify";
import { createFavorite, deleteFavorite, listFavorites } from "../../graphql/mutations";
import styles from "./AddToFavorites.module.css";

export function AddToFavorites({ businessID }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteID, setFavoriteID] = useState(null);

  useEffect(() => {
    async function checkFavorite() {
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql({
        query: listFavorites,
        variables: { filter: { userID: { eq: user.username }, businessID: { eq: businessID } } },
      });
      if (response.data.listFavorites.items.length > 0) {
        setIsFavorite(true);
        setFavoriteID(response.data.listFavorites.items[0].id);
      }
    }
    checkFavorite();
  }, [businessID]);

  async function toggleFavorite() {
    const user = await Auth.currentAuthenticatedUser();
    if (isFavorite) {
      await API.graphql({
        query: deleteFavorite,
        variables: { input: { id: favoriteID } },
      });
      setIsFavorite(false);
      setFavoriteID(null);
    } else {
      const response = await API.graphql({
        query: createFavorite,
        variables: { input: { businessID, userID: user.username } },
      });
      setIsFavorite(true);
      setFavoriteID(response.data.createFavorite.id);
    }
  }

  return (
    <button onClick={toggleFavorite} className={styles.favoriteButton}>
      {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
    </button>
  );
}
