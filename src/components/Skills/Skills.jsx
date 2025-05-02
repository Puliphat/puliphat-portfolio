import React from 'react'
import styles from './Skills.module.css'
import { FaJs,FaReact,FaGitAlt,FaNode,} from 'react-icons/fa6'
import { GrMysql } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";


function Skills() {
  return (
    <div id="skills" className={styles.skills_con} >
      <h2 className={styles.skills_title}>『 My technical skill 』</h2>
      <ul className={styles.skills_list}>
        <li>
          <FaJs/>
        </li>
        <li>
          <FaReact/>
        </li>
        <li>
          <FaNode/>
        </li>
        <li>
          <GrMysql />
        </li>
        <li>
          <BiLogoTailwindCss />
        </li> 
        <li>
          <FaGitAlt/>
        </li> 
      </ul>
    </div>
  )
}

export default Skills
