import React from 'react';
import style from './Skill.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

export const Skill = ({img,title}) => {
    return (
        <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
            <div className={style.skillWrapper}>
                <div className={style.icon}>
                    <img src={img} alt="Photo"/>
                    <h4>{title}</h4>
                </div>

            </div>
        </ScrollAnimation>
    );
};

