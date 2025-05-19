import React from 'react'
import styles from './Education.module.css'
import useInView from '../../hooks/useInView'

function Education() {
  const [educationRef, isEducationInView] = useInView({ threshold: 0.1 });

  return (
    <div id='education' className={styles.education_con}>
      <h2 className={styles.education_title}> Education </h2>
      <div 
        ref={educationRef}
        className={`${styles.education_item} ${isEducationInView ? styles.animate : ''}`}
      >   
        <a href='https://www.swu.ac.th/'  target="_blank" rel="noopener noreferrer" className={styles.education_img}></a>
        <div className={styles.education_info}>
          <h4 className={styles.text_1}>Srinakharinwirot University</h4>
          <p className={styles.text_2}>
           Bachelor's Computer Science <br/>
           (Computer Science)
          </p>
          <p className={styles.text_3}>2020-2024 &nbsp; GPAX:3.05</p>
          <p className={styles.text_4}>
           A field related to programming, computer architecture, data structure, web programming, object oriented programming
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education
