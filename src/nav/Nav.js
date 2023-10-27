import React, {useContext, useEffect, useRef, useState} from 'react';
import style from './Nav.module.css'
import {useLocation} from "react-router-dom";
import {ScrollContext} from "../assets/scrollContext";


export const Nav = ({activeMenu,isActivatedMenu,headerNav}) => {


    const {currentPage,setCurrentPage} = useContext(ScrollContext);

    const handleNavClick = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
            isActivatedMenu && activeMenu()
        }

    }

    const mappedLinks = headerNav.menu.map((l, i) => {
        const activeLink = currentPage === l ? style.activeLink : style.link



        return (
            <li key={l} onClick={() => handleNavClick(`${l}`)}>
                <a className={activeLink}>{l}</a>
            </li>
        )
    })


    return (
        <ul className={style.nav}>
            {mappedLinks}
        </ul>
    );
};

