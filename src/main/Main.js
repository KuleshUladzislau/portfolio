import React, {useEffect, useRef, useState} from 'react';
import style from './Main.module.css'
import portfolioPhoto from '../common/photos/mainPhoto/IMG_0039-removebg-preview.png'
import {useSpring, animated} from "react-spring";


export const Main = ({mainState}) => {
    const {
        h1,
        p,
        buttonContact,
        buttonView,
        id,
        buttonProjects,
        buttonContacts,
        span

    } = mainState


    const handleNavClick = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }


    return (

        <div  id={id} className={style.mainBlock}>
            <div className={style.mainContainer}>
                <img className={style.portfolioPhoto} src={portfolioPhoto} alt=""/>
                <div className={style.infoContainer}>
                    <div className={style.info}>
                        <span>{span}</span>
                        <div className={style.TextContainer}>
                            <h1 className={style.NameTitleOnLeft} id='title'>{h1}</h1>
                        </div>
                        <p>{p}</p>
                    </div>
                    <div className={style.buttonContainer}>
                        <button
                            onClick={() => handleNavClick(buttonContacts)}
                            className={style.buttonContact}>
                            {buttonContact}
                        </button>
                        <button
                            onClick={() => handleNavClick(buttonProjects)}
                            className={style.buttonView}>
                            {buttonView}
                        </button>
                    </div>
                </div>


            </div>

        </div>

    );
};


