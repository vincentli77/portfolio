import React, { useState } from 'react'
import { projectsData } from '../data/projectsData'
import { motion } from 'framer-motion'
import moon from '../assets/moon.svg'
const Project = (props) => {
  const [currentProject] = useState(projectsData)

  const project = currentProject[props.projectNumber]

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.35 },
      x: -800,
    },
  }

  let plusMinus = Math.random() > 0.4 ? 1 : -1
  let imgX = Math.random() * 350 * plusMinus
  let imgY = Math.random() * 120 * plusMinus

  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: {
      opacity: 1,
      x: `${-50}%`,
      y: `${-50}%`,
    },

    exit: {
      opacity: 0,
      transition: { duration: 0.35 },
      x: -800,
    },
  }

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  }

  return (
    <>
      <img className="moon" src={moon} alt="moon"></img>
      <motion.div
        className="project-main"
        initial="initial"
        animate="visible"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        <div className="project-content">
          <h1>{project.title}</h1>
          <p>{project.date}</p>
          <ul className="languages">
            {project.languages.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </div>
        <motion.div
          className="img-content"
          initial="initial"
          animate="visible"
          variants={imgAnim}
          transition={{ duration: 1.2 }}
        >
          <div className="img-container hover">
            <span>
              <h3>{project.title}</h3>
              <p>{project.infos}</p>
            </span>
            <img src={project.img} alt={project.title} className="img" />
          </div>
          <div className="button-container">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover">
              <span className="button">Voir le site</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Project
