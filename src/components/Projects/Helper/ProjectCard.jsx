import React from 'react'
import Styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <>
    <div id={Styles.ProjectCard}>
      <div>
      <img className={Styles.ProjectCardImage} src={props.image} alt="" />
      </div>
        <div>
        
            <Link className={Styles.projectLinks} target="_blank" to={props.url}>{props.title}</Link>
        
       </div>
       </div>
    </>
    
  )
}

export default ProjectCard