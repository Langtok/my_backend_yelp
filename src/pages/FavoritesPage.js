import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listFavorites } from "../graphql/queries";
import { deleteFavorite } from "../graphql/mutations";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const data = await API.graphql({
          query: listFavorites,
          variables: { filter: { userID: { eq: authUser.username } } },
        });
        setFavorites(data.data.listFavorites.items);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    }
    fetchFavorites();
  }, []);

  async function handleRemoveFavorite(id) {
    try {
      await API.graphql({
        query: deleteFavorite,
        variables: { input: { id } },
      });
      setFavorites(favorites.filter((fav) => fav.id !== id));
      alert("Removed from favorites.");
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  }

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorite Businesses</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className={styles.favoriteList}>
          {favorites.map((fav) => (
            <li key={fav.id} className={styles.favoriteItem}>
              <span>{fav.business.name}</span>
              <button onClick={() => handleRemoveFavorite(fav.id)} className="btn-secondary">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
