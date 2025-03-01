import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
// import { Auth as _Auth } from "aws-amplify"; 
import { listFavorites } from "../../graphql/queries";
import { SearchResult } from "../Search/SearchResult";
import styles from "./UserFavorites.module.css";

export function UserFavorites({ userID }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      const response = await API.graphql({
        query: listFavorites,
        variables: { filter: { userID: { eq: userID } } },
      });
      setFavorites(response.data.listFavorites.items);
    }
    fetchFavorites();
  }, [userID]);

  return (
    <div className={styles.userFavorites}>
      <h2>My Favorite Businesses</h2>
      {favorites.length > 0 ? (
        favorites.map((fav) => <SearchResult key={fav.id} business={fav.business} />)
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}
