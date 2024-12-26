import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
      {Object.entries(skills).map(([category, skillsArray], index) => (
        <div key={index} className={styles.skillSection}>
          <h3 className={styles.sectionTitle}>{category}</h3>
          <div className={styles.skills}>
            {skillsArray.map((skill, id) => (
              <div key={id} className={`${styles.skill} ${styles[skill.class]}`}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  


  );
};
