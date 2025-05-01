import React from "react";
import styles from "./Projects.module.css";
import Tilt from "react-parallax-tilt";

function Projects() {
  return (
    <div className={styles.projects_con}>
      <div id="projects" className={styles.projects_title}>
        {" "}
        Projects & Workshop{" "}
      </div>
      <div className={styles.projects_list}>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/movie-project">
            <Tilt scale={1.1} transitionSpeed={2500} tilltReverse={true}>
              <img src="..\src\components\img\PHP_project.jpg" alt="img" />
            </Tilt>
          </a>
          <h3>Streaming movie</h3> <br />
        </div>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/detect-eye-and-smile">
            <Tilt scale={1.1} transitionSpeed={2500} tilltReverse={true}>
              <img
                src="..\src\components\img\detect.jpg"
                alt="img"
              />
            </Tilt>
          </a>
          <h3>Detect eye and smile</h3>
        </div>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/search-travel">
            <Tilt scale={1.1} transitionSpeed={2500} tilltReverse={true}>
              <img
                src="..\src\components\img\search-travel.jpg"
                alt=""
              />
            </Tilt>
          </a>
          <h3>Search Travel</h3>
        </div>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/minishop">
            <Tilt scale={1.1} transitionSpeed={2500} tilltReverse={true}>
              <img src="..\src\components\img\minishop.jpg" alt="img" />
            </Tilt>
          </a>
          <h3>Mini shop</h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;
