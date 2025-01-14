import React from 'react';
import Backend from "./Backend";
import Frontend from "./Frontend";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./skils.css";

function Skills() {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,    
  });

  
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.5 } 
    },
  };

  return (
    <section className="skills section" id="skills" ref={ref}>
      <motion.h2
        className="section__title"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
      >
        Skills
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
      >
        My technical level
      </motion.span>

      <div className="skills__container container grid">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <Frontend />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <Backend />
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
