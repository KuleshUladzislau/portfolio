import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import style from './Header.module.css'
import {Nav} from "../nav/Nav";


export const Header = (props) => {
    const [on, setOn] = useState(false)
    const activeBurger = style.headerBurger + (on ? ' ' + style.active : '')
    const activeMenu = style.headerMenu + (on ? ' ' + style.active : '')
    const [position, setPosition] = useState(false)

    const scrollMenu = position ? style.header : style.headerActive

    useLayoutEffect(()=>{
        setPosition(true)
    },[])

    const onClickHandler = () => {
        setOn(!on)
    }
    const h2ref = useRef(null);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleScroll = () => {
        const rect = h2ref.current.getBoundingClientRect();
        if (rect.top === 0) {
            setPosition(true)
        } else {
            setPosition(false)
        }

    };


    return (

        <div ref={h2ref}>
            <div className={scrollMenu}>
                <div className={style.headerWrapper}>
                    <Nav  />
                </div>
                <div onClick={onClickHandler} className={activeBurger}>
                    <span></span>
                </div>
                {on &&
                    <div className={activeMenu}>
                        <div  className={style.headerMenu}><Nav activeMenu={onClickHandler}/></div>
                    </div>
                }

            </div>
        </div>
    )
};

