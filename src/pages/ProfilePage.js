import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { UserReviews } from "../components/User/UserReviews";
import { UserFavorites } from "../components/User/UserFavorites";
import { UserReservations } from "../components/User/UserReservations";
import styles from "./ProfilePage.module.css";

export function ProfilePage() {
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
    <div className={styles.profilePage}>
      <h1>{user.username}'s Profile</h1>
      <p>Email: {user.email}</p>
      <UserReviews userID={user.id} />
      <UserFavorites userID={user.id} />
      <UserReservations userID={user.id} />
    </div>
  );
}
