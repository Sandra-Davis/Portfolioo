import React from 'react'
import "./qualifications.css"
import { useState } from 'react';

const Qualifications = () => {
    const [toggleState,setToggleState]=useState(1);

    const toggleTab=(index)=>
        {
            setToggleState(index);
        };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>{toggleTab(1)}} >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                <div className={toggleState===2?"qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={()=>{toggleTab(2)}} >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Primary Education</h3>
                        <span className="qualification__subtitle">Chavara Public School,Pala</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2006-2018
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
                        <h3 className="qualification__title">Higher Secondary </h3>
                        <span className="qualification__subtitle">Chavara Public School,Pala</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2018-2020
                        </div>
                    </div>
                    </div>
                    <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Engineering Degree</h3>
                        <span className="qualification__subtitle">College of Engineering,Trivandrum</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2020-2024
                        </div>
                    </div>
                    <div>
                    <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        </div>
                    <div>
                        <h3 className="qualification__title">UX Expert</h3>
                        <span className="qualification__subtitle">Spain-Institute</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2017-2018
                        </div>
                    </div>
                    </div> */}
                </div>
                <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Frontend Developer</h3>
                        <span className="qualification__subtitle">FOSS Hack project</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2023
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
                        <span className="qualification__subtitle">Tink-her-hack project</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2022
                        </div>
                    </div>
                    </div>
                    {/* <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Designer</h3>
                        <span className="qualification__subtitle">Spain-Institute</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2018-2020
                        </div>
                    </div>
                    <div>
                    <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    </div> */}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications
