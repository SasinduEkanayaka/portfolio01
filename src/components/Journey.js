import React from 'react'
import "./journey.css"

function Journey() {
  return (
    <section className="qualification section">
        <h2 className="section__title">My Journey</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Fullstack Developer</h3>
                            <span className="qualification__subtitle">Freelance</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2022-present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">BSc (Hons) in Information Technology
                                    Specialising in Software Engineering</h3>
                            <span className="qualification__subtitle">SLIIT</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2022-present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Higher Diploma in information Technology </h3>
                            <span className="qualification__subtitle">SLIIT</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2022-2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">
                                GCE Advanced Level
                            </h3>
                            <span className="qualification__subtitle">S.T. Thomas Collage Matara</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2020 Aug
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Journey