import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shilpa</h1>
        <p className={styles.description}>
          I’m a passionate Full Stack Developer who loves turning ideas into real-world applications.
          With skills in both frontend and backend development, I enjoy crafting clean, efficient code and delivering seamless user experiences.
        </p>
        {/* Link to download resume */}
        <a 
          href="/resume/Shilpa_Resume.pdf" // Change this to your file's path or link
          download="Shilpa_Resume.pdf"  // This will be the name of the downloaded file
          className={styles.downloadBtn}
        >
          <span>Download Resume</span>
        </a>
      </div>
      <img
        src={getImageUrl("hero/pic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
