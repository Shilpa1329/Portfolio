import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={getImageUrl("about/slash.png")} alt="Slash icon" />
          </div>
          <div className={styles.timelineContent}>
            <h3>From Curiosity to Creation</h3>
            <p>
            Fascinated by the power of technology to change the world, 
            I dove into web development to turn abstract ideas into impactful, functional designs.
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={getImageUrl("about/painting.png")} alt="Frontend icon" />
          </div>
          <div className={styles.timelineContent}>
            <h3>Passionate Frontend Developer</h3>
            <p>
            I focus on building intuitive and responsive user interfaces using React.js and Tailwind CSS,
             turning Figma prototypes into interactive, functional websites. By combining design and code,
              I aim to create seamless and engaging web experiences that are both aesthetically pleasing and easy to navigate.
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={getImageUrl("about/backend.png")} alt="Backend icon" />
          </div>
          <div className={styles.timelineContent}>
            <h3>Exploring Backend Development</h3>
            <p>
            I have ventured into backend development, focusing on creating scalable, efficient systems using Node.js, Express.js, and MongoDB. 
            With a solid foundation in server-side programming, I design APIs and backend services that ensure smooth data handling and robust performance.
             My goal is to build reliable, secure, and high-performing systems that power dynamic web applications.
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={getImageUrl("about/coding.png")} alt="Programmer icon" />
          </div>
          <div className={styles.timelineContent}>
            <h3>From Concepts to Code</h3>
            <p>
            I’ve built a variety of full-stack web applications, integrating APIs and crafting responsive landing pages. 
            These projects showcase my ability to develop user-centric solutions. Explore more of my work in the Projects section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
