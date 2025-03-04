import React, { useEffect, useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { userByUsername } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        const response = await API.graphql(
          graphqlOperation(userByUsername, { username: authUser.username })
        );

        if (response?.data?.userByUsername?.items?.length > 0) {
          const userData = response.data.userByUsername.items[0];
          setUser(authUser);
          setProfile({
            name: userData.name || "",
            email: authUser.attributes.email || "",
          });
        } else {
          setError("User not found in the database.");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  async function handleUpdateProfile(e) {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    try {
      await API.graphql(
        graphqlOperation(updateUser, { input: { id: user.username, name: profile.name } })
      );
      setSuccessMessage("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile.");
    }
  }

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.profilePage}>
      <h1>User Profile</h1>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {error && <p className={styles.error}>{error}</p>}

      <form className={styles.profileForm} onSubmit={handleUpdateProfile}>
        <label>Name:</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          required
        />
        <label>Email:</label>
        <input type="email" value={profile.email} disabled />
        <button type="submit" className="btn-primary">Update Profile</button>
      </form>
    </div>
  );
}
