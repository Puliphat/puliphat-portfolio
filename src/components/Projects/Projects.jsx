import React from "react";
import styles from "./Projects.module.css";
import Tilt from "react-parallax-tilt";
import movieProject from "../img/PHP_project.jpg";
import detectProject from "../img/detect.jpg";
import travelProject from "../img/search-travel.jpg";
import shopProject from "../img/minishop.jpg";
import pokeProject from "../img/poke.jpg";
import restfulProject from "../img/restful-api.jpg";
import pokeProject2 from "../img/poke-next.jpg";
import portfolioV2 from "../img/port_v2.jpg";
import dashboard from "../img/dashboard.jpg";
import useInView from "../../hooks/useInView";

function Projects() {
  const [projectsRef, isProjectsInView] = useInView({ threshold: 0.1 });

  return (
    <div id="projects" className={styles.projects_con}>
      <div className={styles.projects_title}>Projects & Workshop</div>

      <div
        ref={projectsRef}
        className={`${styles.projects_list} ${
          isProjectsInView ? styles.animate : ""
        }`}
      >
        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/dashboard-nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={dashboard} alt="Dashboard Next.js Project" />
            </Tilt>
          </a>
          <h3>Dashboard Next.js </h3>
          <p>
            Full-stack dashboard app where users can register, log in, and
            perform full CRUD on posts with images, titles, and descriptions.
            Admins can view, edit, and delete all users and posts. Built with
            Next.js, MongoDB, NextAuth, and Tailwind CSS.
          </p>
        </div>


        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/Poke-NextJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={pokeProject2} alt="Poke Next.js Project" />
            </Tilt>
          </a>
          <h3>Pokémon Next.js </h3>
          <p>
            Built a responsive Pokédex using Next.js and Tailwind CSS with
            dynamic data from PokeAPI. Used React hooks and Next.js features
            (SSR, Link, Image) with error handling and SEO. Based on a workshop
            organized by Milerdev.
          </p>
        </div>

        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/poke-deck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={pokeProject} alt="Poke-Deck Project" />
            </Tilt>
          </a>
          <h3>Pokémon Deck </h3>
          <p>
            This project is a web app for selecting and saving favorite Pokémon,
            built with React and Tailwind CSS. It utilizes React Hooks like
            useState and useEffect, and connects to PokeAPI Credit to Milerdev
            for organizing this workshop.
          </p>
        </div>

        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/restful-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={restfulProject} alt="RESTful-API Project" />
            </Tilt>
          </a>
          <h3>RESTful-API</h3>
          <p>
            This workshop focuses on creating a RESTful API for the backend
            using CRUD operations for user form data. build the API and test it
            with Postman before integrating it with the frontend. Credit to
            Mikelopster for organizing this workshop.
          </p>
        </div>

        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/movie-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={movieProject} alt="Streaming Movie Project" />
            </Tilt>
          </a>
          <h3>Streaming Movie</h3>
          <p>
            Movie streaming website developed with PHP for server-side logic,
            MySQL for database management, and jQuery for frontend
            interactivity. It includes a user authentication system that
            requires users to register and login before streaming movies This
            project was developed as a university assignment.
          </p>
        </div>

        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/detect-eye-and-smile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={detectProject} alt="Eye and Smile Detection Project" />
            </Tilt>
          </a>
          <h3>Detect Eye and Smile</h3>
          <p>
            This project is an AI-based facial detection system built with
            Python, Keras, TensorFlow, and OpenCV. It detects facial expressions
            such as smiles and identifies eye states open or closed
            project was developed as a university assignment.
          </p>
        </div>

        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/portfolio_V2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={portfolioV2} alt="Portfolio V2 Project" />
            </Tilt>
          </a>
          <h3>Portfolio V2 </h3>
          <p>
          A portfolio project experimenting with React Parallax effects and offset settings to create dynamic scrolling interactions.
          Also focused on responsive design for multiple screen sizes, though responsiveness is still being improved.
          </p>
        </div>

        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/minishop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={shopProject} alt="Mini Shop Project" />
            </Tilt>
          </a>
          <h3>Mini Shop</h3>
          <p>
            A small e-commerce website built with plain HTML, CSS, and
            JavaScript. It allows users to add or remove products and view
            selected items in the shopping cart. Product data is fetched from a
            mock JSON API to practice DOM manipulation and event handling.
          </p>
        </div>

        <div className={styles.projects_items}>
          <a
            href="https://github.com/Puliphat/search-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={travelProject} alt="Search Travel Project" />
            </Tilt>
          </a>
          <h3>Search Travel</h3>
          <p>
            Full-stack web application using Node.js and MySQL to provide data
            retrieval API. The frontend uses React and React Data Table
            Component to display and search data dynamically.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
