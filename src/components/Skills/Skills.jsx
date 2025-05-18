import React from 'react'
import styles from './Skills.module.css'
import { FaHtml5,FaCss3Alt ,FaJs,FaReact,FaGitAlt,FaNode,FaDocker} from 'react-icons/fa6'
import { GrMysql } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiPostman,SiExpress   } from "react-icons/si";



function Skills() {
  return (
    <div id="skills" className={styles.skills_con} >
      <h2 className={styles.skills_title}> Tool & Technologies </h2>
      <ul className={styles.skills_list}>
        <li>
          <div>
            <FaHtml5 style={{ color: '#E34F26' }}/>
          </div>
          <div className={styles.skill_label}>HTML</div>
        </li>
        <li>
          <div>
            <FaCss3Alt style={{ color: '#1572B6' }}/>
          </div>
          <div className={styles.skill_label}>CSS</div>
        </li>
        <li>
          <div>
            <FaJs style={{ color: '#F7DF1E' }}/>
          </div>
          <div className={styles.skill_label}>JavaScript</div>
        </li>
        <li>
          <div>
            <FaReact style={{ color: '#61DAFB' }}/>
          </div>
          <div className={styles.skill_label}>React.js</div>
        </li>
        <li>
          <div>
            <FaNode style={{ color: '#339933' }}/>
          </div>
          <div className={styles.skill_label}>Node.js</div>
        </li>
        <li>    
          <div>
            <SiExpress style={{ color: '#000000' }}/>
          </div>
          <div className={styles.skill_label}>Express.js</div>
        </li>
      </ul>
      <ul className={styles.skills_list}>
      <li>
          <div>
            <BiLogoTailwindCss style={{ color: '#06B6D4' }}/>
          </div>
          <div className={styles.skill_label}>Tailwindcss</div>
        </li> 
    <li>
          <div>
            <GrMysql style={{ color: '#4479A1' }}/>
          </div>
          <div className={styles.skill_label}>MySQL</div>
        </li>
        <li>
          <div>
            <FaGitAlt style={{ color: '#F05032' }}/>
          </div>
          <div className={styles.skill_label}>Git</div>
        </li> 
        <li>
          <div>
            <SiPostman style={{ color: '#FF6C37' }}/>
          </div>
          <div className={styles.skill_label}>Postman</div>
        </li>
        <li>
          <div>
            <FaDocker style={{ color: '#2496ED' }}/>
          </div>
          <div className={styles.skill_label}>Docker</div>
        </li> 
    </ul>
    </div>
   
  )
}

export default Skills
