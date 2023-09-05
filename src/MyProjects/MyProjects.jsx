import React from 'react';
import {Project} from "./Project/Project";
import style from './MyProject.module.css'
import containerStyle from '../common/styles/Container.module.css'
import socialNetwork from '../common/photos/projects/social-page_main.png'
import todoList from '../common/photos/projects/to-do-list.png'
import ScrollAnimation from 'react-animate-on-scroll';
export const MyProjects = () => {
    const projects = [
        {img:socialNetwork,title:'Social Network'},
        {img:todoList,title:'ToDoList'}
    ]
    return (
        <div className={style.myProjects} id='projects'>
            <div className={`${containerStyle.container} ${style.myProjectsContainer}`}>
                <div className={style.projectsWrapper}>

                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true} >
                        <h2 className={style.projectsTitle}>My Projects</h2>
                    </ScrollAnimation>

                    <div className={style.projects}>
                        {
                            projects.map((el,index)=> <Project key={index} img={el.img} projectName={el.title}/>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

