import React, {useState, useEffect} from "react"
import styles from "./Navbar.module.css"
import { BiSolidCat } from "react-icons/bi"
import { FaBars } from "react-icons/fa6"

const Navbar = () => {
  
  const [isToggled, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav className={scrolled ? styles.scrolled : ''}>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#"><BiSolidCat/> PULIPHAT </a>
          </div>

          <ul>
            <li>
              <a href="#skills">Skills</a>
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
            <li>
              <a href="#skills" >Skills</a>
            </li>
            <li>
              <a href="#projects" >Projects</a>
            </li>
            <li>
              <a href="#education" >Education</a>
            </li>
          </ul>
          <div className={styles.mobile_button}>
            <a href="#contact" >Contact</a>
          </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
