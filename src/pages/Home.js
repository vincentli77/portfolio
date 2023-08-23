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
    <main>
      <motion.div
        className="home"
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
        <ButtonsBottoms right={'/portfolio/project-1'} />
      </motion.div>
    </main>
  )
}

export default Home
