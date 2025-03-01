import React, { useEffect, useState } from "react";
import { Auth, API } from "aws-amplify";
import { getUser, updateUser } from "../../graphql/mutations";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: "", email: "" });

  useEffect(() => {
    async function fetchUser() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const data = await API.graphql({
          query: getUser,
          variables: { id: authUser.username },
        });
        setUser(authUser);
        setProfile({ name: data.data.getUser.name || "", email: authUser.attributes.email || "" });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await API.graphql({
        query: updateUser,
        variables: { input: { id: user.username, name: profile.name } },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.profilePage}>
      <h2>User Profile</h2>
      <form className={styles.profileForm} onSubmit={handleUpdate}>
        <label>Name:</label>
        <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} required />
        <label>Email:</label>
        <input type="email" value={profile.email} disabled />
        <button type="submit" className="btn-primary">Update Profile</button>
      </form>
    </div>
  );
}
