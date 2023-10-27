import React from 'react';
import style from './Project.module.css'
import ScrollAnimation from "react-animate-on-scroll";

export const Project = ({description, projectName, img,link}) => {
    return (
        <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
            <div className={style.projectWrapper}>
                <div className={style.imgWrapper}>
                   <img src={img} alt="Photo project"/>
                </div>
                <a href={`${link}`} target={'_blank'} className={style.textOverLay} >
                    <p className={style.description}>{description}</p>
                </a>
                <div>
                    <h3>{projectName}</h3>
                </div>
            </div>
        </ScrollAnimation>
    );
};

