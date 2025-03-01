import React, { useState, useEffect } from "react";
import styles from "./BackgroundSlider.module.css";
import bg1 from "../../assets/images/bg-1.jpg";
import bg2 from "../../assets/images/bg-2.jpg";
import bg3 from "../../assets/images/bg-3.jpg";
import bg3 from "../../assets/images/bg-4.jpg";
import bg3 from "../../assets/images/bg-5.jpg";
import bg3 from "../../assets/images/bg-6.jpg";
import bg3 from "../../assets/images/bg-7.jpg";

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];

export function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <img src={images[currentIndex]} alt="Background" className={styles.image} />
    </div>
  );
}
