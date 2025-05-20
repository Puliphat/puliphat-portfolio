import React from 'react'
import styles from './Footer.module.css'
import { FaGithub, FaLinkedinIn, FaFacebook, FaHeart } from 'react-icons/fa6'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_content}>
          
          <div className={styles.footer_copyright}>
            <p>
              Developed with <FaHeart className={styles.heart_icon} /> by Puliphat © {currentYear}
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
 