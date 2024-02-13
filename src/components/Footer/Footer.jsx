import React from 'react'
import Styles from './Footer.module.css'
const Footer = () => {
  return (
    <>
     <footer id={Styles.footer}>
      <div id={Styles.footerHolder}>
      <blockquote id={Styles.quote}>Created by Deepraj 2024</blockquote>
      </div> 
    </footer>
    </>
   
  )
}

export default Footer