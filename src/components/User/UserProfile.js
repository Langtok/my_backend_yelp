import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { API } from "aws-amplify";
import { Auth as _Auth } from "aws-amplify"; 
import { getUser } from "../../graphql/queries";
import { UserReviews } from "./UserReviews";
import { UserFavorites } from "./UserFavorites";
import { UserReservations } from "./UserReservations";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const authUser = await Auth.currentAuthenticatedUser();
      const response = await API.graphql({
        query: getUser,
        variables: { id: authUser.username },
      });
      setUser(response.data.getUser);
    }
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.profileContainer}>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>

      <h2>My Reviews</h2>
      <UserReviews userID={user.id} />

      <h2>My Favorites</h2>
      <UserFavorites userID={user.id} />

      <h2>My Reservations</h2>
      <UserReservations userID={user.id} />
    </div>
  );
}
