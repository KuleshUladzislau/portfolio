import React from 'react';
import style from './Project.module.css'
import ScrollAnimation from "react-animate-on-scroll";

export const Project = ({description,projectName,img}) => {
    return (
        <ScrollAnimation animateIn={style.SlideIn} animateOnce={true} >
            <div className={style.projectWrapper}>
                <div className={style.imgWrapper}>
                    <a href='#'><img src={img} alt="Photo project"/></a>
                </div>
                <div>
                    <h3>{projectName}</h3>
                    <span>{description}</span>
                </div>

            </div>
        </ScrollAnimation>
    );
};

