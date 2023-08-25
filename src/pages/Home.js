import React from 'react'
import ButtonsBottoms from '../components/ButtonBottoms'
import DynamicText from '../components/DynamicText'
import { motion } from 'framer-motion'

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  }

  return (
    <div className="home">
      <motion.div
        className="home-motion"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <div className="home-main">
          <div className="main-content">
            <motion.h1>Vincent LI</motion.h1>
            <motion.h2>
              <DynamicText />
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home
