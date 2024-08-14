import React, { useContext } from "react";
import "./services.css"
import { themeContext } from "../Context";


function Services() {
    const[state, toggleStae] = React.useState(0);

    function change(num) {
        toggleStae( () => {return state === 0 ? num : 0})
    }

     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <section className="services section" id="services">
        <h2 className="section__title"style={{ color: darkMode ? "white" : "" }}>Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-window services__icon"></i>
                    <h3 className="services__title">Web Application <br/> Development</h3>
                </div>
                <span className="services__button" onClick={() => change(1)}>view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={state === 1 ? "services__modal active-model" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => change(1)}></i>

                        <h3 className="services__modal-title">Web Application <br/> Development</h3>
                        <p className="services__modal-description">
                        Experienced web app developer with 2+ years, specializing in frontend, 
                        backend, and delivering innovative solutions for enhanced user experiences
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    UI/UX Design and Prototyping
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Responsive Design
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Security Implementation
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Database Integration
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Performance Optimization
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Bug Fixing
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Deployment
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Maintenance and Support
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil  uil-calculator-alt services__icon"></i>
                    <h3 className="services__title">Mobile Application <br/> Development</h3>
                </div>
                <span className="services__button" onClick={() => change(2)}>view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={state === 2 ? "services__modal active-model" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => change(2)}></i>

                        <h3 className="services__modal-title">Mobile Application <br/> Development</h3>
                        <p className="services__modal-description">
                        Mobile app developer crafting intuitive and scalable solutions, blending creativity 
                        with technical expertise for exceptional user experiences. 1+ years of experience
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    UI/UX Design
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    IOS App Development
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Android App Development
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Cross-Platform App Development
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                API Integration
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Database Management
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Security Implementation
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User Training and Documentation
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Testing and Quality Assurance
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Deployment and Optimization
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                App Maintenance and Support
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">UI / UX <br/> Design</h3>
                </div>
                <span className="services__button" onClick={() => change(3)}>view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={state === 3 ? "services__modal active-model" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => change(3)}></i>

                        <h3 className="services__modal-title">UI / UX <br/> Design</h3>
                        <p className="services__modal-description">
                        Passionate UI/UX developer crafting delightful digital experiences. Creative design thinking 
                        meets user-centered solutions for impactful interfaces. 2+ years of expertise.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Wireframing
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Prototyping
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User Interface (UI) Design
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User Experience (UX) Design
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Interaction Design
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Responsive Design
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Dashboard Design
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Brand Integration
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services