import React from 'react'
import styles from './Education.module.css'

function Education() {
  return (
    <div id='education' className={styles.education_con}>
      <h2  className={styles.education_title}> Education </h2>
      <div className={styles.education_item}>   
        <a href='https://www.swu.ac.th/' className={styles.education_img}></a>
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
