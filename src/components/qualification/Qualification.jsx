import React, { useState } from "react";
import "./qualification.css";

const Qualification = () =>{
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab= (index) =>{
        setToggleState(index);
    }

    return(
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personnel journey</span>

            <div className="qulification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
                </div>
                
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">International Management | Information Systems M.Sc</h3>
                            <span className="qualification__subtitle">South Westphalia University of Applied Sciences</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023-Present
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
                            <h3 className="qualification__title">React - Complete Guide 2024</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2023-2024
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Financial Technologies B.Sc</h3>
                            <span className="qualification__subtitle">Tashkent Instute of Finance</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2017-2021
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
                            <h3 className="qualification__title">Frontend Development</h3>
                            <span className="qualification__subtitle">PDP IT Academy</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>
                        

                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Frontend Developer</h3>
                            <span className="qualification__subtitle">Freelancer</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024-Present
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
                            <h3 className="qualification__title">Frontend Developer</h3>
                            <span className="qualification__subtitle">Paybek - Financial Technologies</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2023
                            </div>
                        </div>
                        

                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Frontend Developer | Intern</h3>
                            <span className="qualification__subtitle">Shipox.com</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> April - August 2022
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
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Qualification;