import React from "react";
import styles from "./Projects.module.css";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa6";
import movieProject from "../img/PHP_project.jpg";
import detectProject from "../img/detect.jpg";
import travelProject from "../img/search-travel.jpg";
import shopProject from "../img/minishop.jpg";
import pokeProject from "../img/poke.jpg";

function Projects() {
  return (
    <div className={styles.projects_con}>
      <div id="projects" className={styles.projects_title}>
        {" "}
        Projects & Workshop{" "}
      </div>
      <div className={styles.projects_list}>
      <div className={styles.projects_items}>
          <a href="https://poke-deck-pearl.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={pokeProject} alt="Poke-Deck Project" />
            </Tilt>
          </a>
          <div style={{display:"flex" ,justifyContent:"center"}} >
            <h3>Pokémon Deck </h3>

            <a href="https://github.com/Puliphat/poke-deck" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} style={{ color: '#181717' }}/>
            </a> 

            </div>
          <p> This project is a web app for selecting and saving favorite Pokémon, built with React and Tailwind CSS. It utilizes React Hooks like useState and useEffect, and connects to PokeAPI as part of a workshop by Milerdev.</p>
        </div>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/movie-project" target="_blank" rel="noopener noreferrer">
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={movieProject} alt="Streaming Movie Project" />
            </Tilt>
          </a>
          <h3>Streaming Movie</h3>
          <p>Movie streaming website developed with PHP for server-side logic, MySQL for database management, and jQuery for frontend interactivity.
          It includes a user authentication system that requires users to register and log in before streaming movies.</p>
        </div>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/detect-eye-and-smile" target="_blank" rel="noopener noreferrer">
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={detectProject} alt="Eye and Smile Detection Project" />
            </Tilt>
          </a>
          <h3>Detect Eye and Smile</h3>
          <p>This project is an AI-based facial detection system built with Python, Keras, TensorFlow, and OpenCV.
          It detects facial expressions such as smiles and identifies eye states open or closed</p>
        </div>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/search-travel" target="_blank" rel="noopener noreferrer">
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={travelProject} alt="Search Travel Project" />
            </Tilt>
          </a>
          <h3>Search Travel</h3>
          <p>A full-stack web application using Node.js to create RESTful API paths and connect to a database. The frontend is built with React and displays data using React Data Table Component.</p>
        </div>
        <div className={styles.projects_items}>
          <a href="https://github.com/Puliphat/minishop" target="_blank" rel="noopener noreferrer">
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={shopProject} alt="Mini Shop Project" />
            </Tilt>
          </a>
          <h3>Mini Shop</h3>
          <p>A simple shopping website built during my JavaScript practice.
          It allows users to add and remove products, fetching data from a mock API in JSON format.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
