import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonBottoms";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

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
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>46 avenue du chêne saint fiacre</p>
              <p>77600 Chanteloup-en-brie</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
                <p
                  style={{ cursor: "pointer" }}                >
                  06 51 93 09 98
                </p>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
                <p
                  style={{ cursor: "pointer" }}
                >
                  li.jiajinvincent1997@gmail.com
                </p>
            </div>
          </div>
          <SocialNetwork />
        </div>
        <ButtonsBottom left={"/project-5"} />
      </motion.div>
    </main>
  );
};

export default Contact;
