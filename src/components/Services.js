import React, { useContext } from "react";
import "./services.css";
import { themeContext } from "../Context";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
    const [state, toggleState] = React.useState(0);

    function change(num) {
        toggleState(() => (state === 0 ? num : 0));
    }

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // Animation variants
    const modalVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title" style={{ color: darkMode ? "white" : "" }}>Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-window services__icon"></i>
                        <h3 className="services__title">Web Application <br /> Development</h3>
                    </div>
                    <span className="services__button" onClick={() => change(1)}>view more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <AnimatePresence>
                        {state === 1 && (
                            <motion.div
                                className="services__modal active-model"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={modalVariants}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => change(1)}></i>

                                    <h3 className="services__modal-title">Web Application <br /> Development</h3>
                                    <p className="services__modal-description">
                                        Experienced web app developer with 2+ years, specializing in frontend, 
                                        backend, and delivering innovative solutions for enhanced user experiences
                                    </p>
                                    <ul className="services__modal-services grid">
                                        {/* List of services */}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Application Development Section */}
                <div className="services__content">
                    <div>
                        <i className="uil  uil-calculator-alt services__icon"></i>
                        <h3 className="services__title">Mobile Application <br /> Development</h3>
                    </div>
                    <span className="services__button" onClick={() => change(2)}>view more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <AnimatePresence>
                        {state === 2 && (
                            <motion.div
                                className="services__modal active-model"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={modalVariants}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => change(2)}></i>

                                    <h3 className="services__modal-title">Mobile Application <br /> Development</h3>
                                    <p className="services__modal-description">
                                        Mobile app developer crafting intuitive and scalable solutions, blending creativity 
                                        with technical expertise for exceptional user experiences. 1+ years of experience
                                    </p>
                                    <ul className="services__modal-services grid">
                                        {/* List of services */}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* UI / UX Design Section */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">UI / UX <br /> Design</h3>
                    </div>
                    <span className="services__button" onClick={() => change(3)}>view more
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <AnimatePresence>
                        {state === 3 && (
                            <motion.div
                                className="services__modal active-model"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={modalVariants}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="services__modal-content">
                                    <i className="uil uil-times services__modal-close" onClick={() => change(3)}></i>

                                    <h3 className="services__modal-title">UI / UX <br /> Design</h3>
                                    <p className="services__modal-description">
                                        Passionate UI/UX developer crafting delightful digital experiences. Creative design thinking 
                                        meets user-centered solutions for impactful interfaces. 2+ years of expertise.
                                    </p>
                                    <ul className="services__modal-services grid">
                                        {/* List of services */}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default Services;
