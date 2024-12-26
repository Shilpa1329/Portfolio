import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.background}></div> {/* Background with Parallax Effect */}
      <div className={styles.text}>
        <h2>Get in Touch</h2>
        <p>Let’s connect - Excited to explore new opportunities.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="https://mail.google.com/mail/?view=cm&to=kalrashilpa1329@gmail.com" target="_blank">kalrashilpa1329@gmail.com</a>


        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sk1329/">https://www.linkedin.com/in/sk1329</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Shilpa1329">https://github.com/Shilpa1329</a>
        </li>
      </ul>
    </footer>
  );
};
