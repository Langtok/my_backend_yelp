import React from "react";
import BackgroundSlider from "react-background-slider";
import bg1 from "../../assets/bg-1.jpg";
import bg2 from "../../assets/bg-2.jpg";
import bg3 from "../../assets/bg-3.jpg";
import styles from "./BackgroundSlider.module.css";

export function BackgroundSlideshow() {
  return (
    <div className={styles.sliderContainer}>
      <BackgroundSlider images={[bg1, bg2, bg3]} duration={5} transition={2} />
    </div>
  );
}
