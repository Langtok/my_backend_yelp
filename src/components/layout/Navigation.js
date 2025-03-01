import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import styles from "./Navigation.module.css";

export function Navigation() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        setUser(authUser);
      } catch {
        setUser(null);
      }
    }
    checkUser();
  }, []);

  async function handleSignOut() {
    try {
      await Auth.signOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">YelpClone</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/reservations">Reservations</Link>
        {user && <Link to="/profile">Profile</Link>}
      </div>
      <div className={styles.authButtons}>
        {user ? (
          <button className={styles.logoutBtn} onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <>
            <button className={styles.loginBtn} onClick={() => navigate("/login")}>
              Login
            </button>
            <button className={styles.signupBtn} onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
