import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../img/puliphat.jpg";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, my name is</p>
            <h3 className={styles.text_2}>Puliphat</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "5px" }}>I'm a </span>
              <TypeAnimation
                sequence={[
                  "Software Developer  ◡̀_◡́)ᕤ",
                  1000,
                  "Full-Stack Developer •̀ ᗜ •́)ᕗ",
                  1000,
                ]}
                speed={65}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
            Full-Stack Developer who builds clean, modern, and meaningful web experiences.
Simple code, solid results  always learning, always growing.
I believe great things happen when good people build together.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/Puliphat" target="_blank" rel="noopener noreferrer">
                  <FaGithub style={{ color: '#181717' }}/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/puli.putichai/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook style={{ color: '#1877F2' }}/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/puliphat-puttichaivanichkij-21367622b/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn style={{ color: '#0A66C2' }}/>
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div>
              <img src={profileImage} alt="Profile" className={styles.hero_img} />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
