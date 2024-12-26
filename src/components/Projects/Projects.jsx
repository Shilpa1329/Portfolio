
import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Split the projects into frontend and MERN stack projects
  const frontendProjects = projects.filter((project) => project.type === "frontend");
  const mernStackProjects = projects.filter((project) => project.type === "mern");

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.frontendProjects}>
        <h3 className={styles.projectHeading}>Frontend Projects</h3>
        <div className={styles.projects}>
          {frontendProjects.map((project, id) => (
            <div key={id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mernStackProjects}>
        <h3 className={styles.projectHeading}>MERN Stack Projects</h3>
        <div className={styles.projects}>
          {mernStackProjects.map((project, id) => (
            <div key={id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
