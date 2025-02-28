import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listFavorites } from "../graphql/queries";
import { SearchResult } from "../components/Search/SearchResult";
import styles from "./FavoritesPage.module.css";

export function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql({
        query: listFavorites,
        variables: { filter: { userID: { eq: user.username } } },
      });
      setFavorites(response.data.listFavorites.items);
    }
    fetchFavorites();
  }, []);

  return (
    <div className={styles.favoritesPage}>
      <h2>My Favorite Businesses</h2>
      {favorites.length > 0 ? (
        favorites.map((fav) => <SearchResult key={fav.id} business={fav.business} />)
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}
