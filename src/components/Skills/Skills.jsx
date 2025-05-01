import React from 'react'
import styles from './Skills.module.css'
import { FaJs,FaReact,FaGitAlt,FaNode,FaHtml5,FaCss3Alt} from 'react-icons/fa6'
import { GrMysql } from "react-icons/gr";

function Skills() {
  return (
    <div className={styles.skills_con} >
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
          <FaGitAlt/>
        </li> 
        <li>
          <FaHtml5/>
        </li>
        <li>
          <FaCss3Alt/>
        </li>
      </ul>
    </div>
  )
}

export default Skills
