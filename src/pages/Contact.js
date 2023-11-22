import React from 'react'
import SocialNetwork from '../components/SocialNetwork'
import { motion } from 'framer-motion'

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  }

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  }

  return (
    <motion.div
      className="contact"
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransition}
      transition={transition}
    >
      <div className="contact-infos">
        <SocialNetwork />
        <div className="my">
          <h4>Hello</h4>
          <p style={{ lineHeight: '35px' }}>
            My name is Vincent LI. I'm based in Paris and I'm a junior web developer. I'm currently
            in the final year of my studies at HETIC, where I've been learning design and web
            development. I am reaching the culmination of my studies and I'm actively seeking a
            full-time position starting in early 2024.
          </p>
        </div>
        <div className="address">
          <div className="content">
            <h4>Adresse</h4>
            <p style={{ lineHeight: '35px' }}>
              46 avenue du chêne saint fiacre
              <br />
              77600 Chanteloup-en-brie
            </p>
          </div>
        </div>
        <div className="phone">
          <div className="content">
            <h4>Téléphone</h4>
            <p style={{ cursor: 'pointer' }}>06 51 93 09 98</p>
          </div>
        </div>
        <div className="email">
          <div className="content">
            <h4>Email</h4>
            <p style={{ cursor: 'pointer' }}>li.jiajinvincent1997@gmail.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
