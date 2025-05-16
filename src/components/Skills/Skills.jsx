import React from 'react'
import styles from './Skills.module.css'
import { FaJs,FaReact,FaGitAlt,FaNode,FaDocker} from 'react-icons/fa6'
import { GrMysql } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { DiRedis } from "react-icons/di";



function Skills() {
  return (
    <div id="skills" className={styles.skills_con} >
      <h2 className={styles.skills_title}>『 My Technical Stack 』</h2>
      <ul className={styles.skills_list}>
        <li>
          <FaJs style={{ color: '#F7DF1E' }}/>
        </li>
        <li>
          <FaReact style={{ color: '#61DAFB' }}/>
        </li>
        <li>
          <FaNode style={{ color: '#339933' }}/>
        </li>
        <li>
          <BiLogoTailwindCss style={{ color: '#06B6D4' }}/>
        </li> 
        <li>
          <GrMysql style={{ color: '#4479A1' }}/>
        </li>
        <li>
          <FaGitAlt style={{ color: '#F05032' }}/>
        </li> 
        <li>
          <SiPostman style={{ color: '#FF6C37' }}/>
        </li>
        <li>
          <DiRedis style={{ color: '#C53030' }}/>
        </li>
        <li>
          <FaDocker style={{ color: '#2496ED' }}/>
        </li> 
      </ul>
    </div>
  )
}

export default Skills
