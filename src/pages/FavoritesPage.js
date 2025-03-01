import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listFavorites } from "../graphql/queries";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const data = await API.graphql({ query: listFavorites });
        setFavorites(data.data.listFavorites.items);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    }
    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Your Favorites</h1>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>{fav.business.name}</li>
        ))}
      </ul>
    </div>
  );
}
