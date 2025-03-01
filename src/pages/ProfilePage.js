import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getUser } from "../graphql/queries";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await API.graphql({ query: getUser });
        setUser(data.data.getUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
