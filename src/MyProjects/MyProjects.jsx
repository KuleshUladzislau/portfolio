import React from 'react';
import {Project} from "./Project/Project";
import style from './MyProject.module.css'
import containerStyle from '../common/styles/Container.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
export const MyProjects = ({projectsState}) => {
    const projects = projectsState.projects


    return (
        <div className={style.myProjects} id={projectsState.id}>
            <div className={`${containerStyle.container} ${style.myProjectsContainer}`}>
                <div className={style.projectsWrapper}>

                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true} >
                        <h2 className={style.projectsTitle}>{projectsState.h2}</h2>
                    </ScrollAnimation>

                    <div className={style.projects}>
                        {
                            projects.map((el,index)=>
                                <Project
                                    key={index}
                                    img={el.img}
                                    link={el.link}
                                    projectName={el.title}
                                    description={el.description}
                                />)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

