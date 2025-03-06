import React from "react";
import { Link } from "react-router-dom";
import styles from "./BusinessCard.module.css";

export function BusinessCard({ business }) {
  return (
    <div className={styles.businessCard}>
      <img 
        src={business.imageUrl || "/assets/logo.png"} 
        alt={business.name} 
        className={styles.image} 
        onError={(e) => { e.target.src = "/assets/logo.png"; }} // ✅ Fallback for broken images
      />
      <div className={styles.info}>
        <h3>{business.name}</h3>
        <p>{business.address || "No address provided"}</p>
        <p>
          <span role="img" aria-label="star">⭐</span> {business.rating ?? "N/A"} ({business.reviewCount ?? 0} reviews)
        </p>
        <Link to={`/business/${business.id}`} className="btn-primary">View Details</Link>
      </div>
    </div>
  );
}
