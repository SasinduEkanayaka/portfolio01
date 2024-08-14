import React, { useContext } from "react";
import "./home.css"
import Social from './Social'
import Data from './Data'
import Scrolldown from './ScrollDown'
import { motion } from "framer-motion"
import { themeContext } from "../Context";


const sliderVarient = {
  
  initial: {
    x:0,
  },
  animate: {
    x:"-50%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:80,
    },
  },
}


const Home = () => {
   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid" style={{zIndex:"+2"}}>
                <Social />

                <div className="home__img-wrapper">
                    <div className="home__img" ></div>
                </div>
                
                
                

                    <Data />

            </div>
            <motion.div className="slidingTextAnimation" style={{ color: darkMode ? "white" : "", zIndex: darkMode ? "0" : "-1", opacity: darkMode ? "0.1" : "1"}} variants={sliderVarient} initial="initial" animate="animate">
                EkanayakaSS#
                </motion.div>
            <Scrolldown />
        </div>
    </section>
  )
}

export default Home