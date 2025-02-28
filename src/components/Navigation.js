import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">YelpClone</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.signupBtn}>Sign Up</button>
      </div>
    </nav>
  );
}
