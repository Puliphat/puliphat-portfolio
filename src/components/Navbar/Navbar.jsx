import React, {useState} from "react"
import styles from "./Navbar.module.css"
import { BiSolidCat } from "react-icons/bi"
import { FaBars } from "react-icons/fa6"

const Navbar = () => {
  
  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }


  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <span href="#"><BiSolidCat/> MIGHTY </span>
          </div>

          <ul>
            <li>
              <a href="#skills">Skill</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>
          <div className={styles.button}>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        <FaBars className={styles.bars} onClick={handleToggle} />
        {isToggled ? (
          <>
          <ul className={styles.mobile_menu} >
            <li><a href="#"></a>Skill</li>
            <li><a href="#"></a>Project</li>
            <li><a href="#"></a>Education</li>
          </ul>
          <div className={styles.mobile_button}>
            <a href="#">Contact</a>
          </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
