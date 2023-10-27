import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import style from './Header.module.css'
import {Nav} from "../nav/Nav";


export const Header = (
    {
        setOverflowMode,
        headerNav,
        changeLanguage,
        language
    }
) => {

    const [on, setOn] = useState(false)
    const activeBurger = style.headerBurger + (on ? ' ' + style.active : '')
    const activeMenu = style.headerMenu + (on ? ' ' + style.active : '')
    const [position, setPosition] = useState(false)

    const activeLanguageEn = language === 'en' ? style.activeLanguage : style.defaultLanguage
    const activeLanguageRu = language === 'ru'? style.activeLanguage : style.defaultLanguage

    const activeLanguageInActiveHeaderEn = position && language === 'en' ? style.languageWithActiveHeader : activeLanguageEn
    const activeLanguageInActiveHeaderRu = position && language === 'ru' ? style.languageWithActiveHeader : activeLanguageRu

    const languageStyleWithBurgerRu = on && language === 'ru' ? style.languageBurgerActive : style.languageBurger
    const languageStyleWithBurgerEn = on && language === 'en' ? style.languageBurgerActive : style.languageBurger

    const scrollMenu = position ? style.header : style.headerActive

    useLayoutEffect(()=>{
        setPosition(true)
    },[])

    const onClickHandler = () => {
        setOn(!on)
        setOverflowMode()
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

    const onChangeRuLanguage = () => changeLanguage('ru')


    const onChangeEnLanguage = () => changeLanguage('en')



    return (

        <div ref={h2ref}>
            <div className={scrollMenu}>

                <div className={style.headerWrapper}>
                    <Nav headerNav={headerNav} language={language}  />
                </div>
                <div onClick={onClickHandler} className={activeBurger}>
                    <span></span>
                </div>
                {on &&
                    <div className={activeMenu}>
                        <div  className={style.headerMenu}>
                            <Nav
                                activeMenu={onClickHandler}
                                isActivatedMenu={on}
                                headerNav={headerNav}
                            />
                        </div>
                        <div className={style.language}>
                            <span className={languageStyleWithBurgerRu} onClick={onChangeEnLanguage}>EN</span>
                            <span className={style.languageTraitBurger}>|</span>
                            <span className={languageStyleWithBurgerEn} onClick={onChangeRuLanguage}>RU</span>
                        </div>
                    </div>
                }
                {!on && <div className={style.language}>
                    <span className={activeLanguageInActiveHeaderEn} onClick={onChangeEnLanguage}>EN</span>
                    <span className={style.languageTrait}>|</span>
                    <span className={activeLanguageInActiveHeaderRu} onClick={onChangeRuLanguage}>RU</span>
                </div>}
            </div>
        </div>
    )
};

