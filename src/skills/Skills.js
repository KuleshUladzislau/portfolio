import React, {useRef} from 'react';
import style from './Skills.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import {Skill} from "./Skill/Skill";
import styleContainer from '../common/styles/Container.module.css';
import reactImg from '../common/photos/skills/react.svg'
import storyBook from '../common/photos/skills/storybook.png'
import rtk from '../common/photos/skills/redux.svg'
import ts from '../common/photos/skills/Ts.svg'
import js from '../common/photos/skills/Js.svg'
import html from '../common/photos/skills/HTML.svg'

export const Skills = (props) => {
    const skills = [
        {img: reactImg, title: 'REACT'},
        {img: storyBook, title: 'STORY BOOK'},
        {img: rtk, title: 'REDUX TOOLKIT'},
        {img: ts, title: 'TypeScript'},
        {img: js, title: 'JavaScript'},
        {img: html, title: 'HTML&CSS'}
    ]
    const skillsRef = useRef(null)

    return (

        <div ref={skillsRef} className={style.skillsBlock} id='skills'>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.skillsWrapper}>
                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                        <h2 className={style.skillsTitle}>How i help you in your next project</h2>
                    </ScrollAnimation>
                    <div className={style.skills}>
                        {
                            skills.map((el, index) =>
                                <Skill key={index} img={el.img} title={el.title}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

