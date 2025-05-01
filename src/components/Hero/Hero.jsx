import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, my name is</p>
            <h3 className={styles.text_2}>Puliphat</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "5px" }}>I’m a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer ( ◡̀_◡́)ᕤ",
                  1000,
                  "Full-Stack Developer ᕙ( •̀ ᗜ •́ )ᕗ",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              A passionate WebDeveloper who loves creating beautiful and
              functional websites
              <br /> I am motivated and open to learning new skill to
              continually improve myself.
            </p>
            <ul id="skills" className={styles.hero_social}>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tilltReverse={true}>
            <div>
              <div className={styles.hero_img}></div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
