import React, {useRef} from 'react';
import style from './Skills.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import {Skill} from "./Skill/Skill";
import styleContainer from '../common/styles/Container.module.css';
import reactImg from '../common/photos/skills/react.svg'
import storyBook from '../common/photos/skills/storybook-icon-svgrepo-com.svg'
import rtk from '../common/photos/skills/redux.svg'
import ts from '../common/photos/skills/Ts.svg'
import js from '../common/photos/skills/Js.svg'
import html from '../common/photos/skills/HTML.svg'
import material from '../common/photos/skills/material-ui-svgrepo-com.svg'
import antDesign from '../common/photos/skills/antdesign-svgrepo-com.svg'
import radixUi from '../common/photos/skills/radix-ui.svg'
import saas from '../common/photos/skills/sass-svgrepo-com.svg'
import git from '../common/photos/skills/git-svgrepo-com.svg'
import rhookform from '../common/photos/skills/react-hook-form-logo-only.svg'



export const Skills = ({skillState}) => {
    const skills = [
        {img: reactImg, title:'React'},
        {img: js, title: 'JavaScript'},
        {img: ts, title: 'TypeScript'},
        {img: html, title: 'HTML&CSS'},
        {img: rtk, title: 'Redux Toolkit RTK Query'},
        {img: storyBook, title: 'Story Book'},
        {img:material,title:'MaterialUi'},
        {img:antDesign,title:'Ant Design'},
        {img:radixUi,title:'RadixUI'},
        {img:saas,title:'SASS'},
        {img:git,title:'Git'},
        {img:rhookform,title:'react-hook-form'},
    ]
    const skillsRef = useRef(null)

    return (

        <div ref={skillsRef} className={style.skillsBlock} id={skillState.id}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.skillsWrapper}>
                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                        <h2 className={style.skillsTitle}>{skillState.h2}</h2>
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

