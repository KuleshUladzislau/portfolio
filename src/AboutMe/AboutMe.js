import React from 'react';
import containerStyle from '../common/styles/Container.module.css'
import animationStyle from '../common/styles/animation.module.css'
import style from '../AboutMe/AboutMe.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

export const AboutMe = () => {
    return (

        <div className={style.AboutMe} id='aboutMe'>
            <div className={`${containerStyle.container} ${style.aboutMeContainer}`}>

                <div className={style.wrapperAboutMe}>


                    <ScrollAnimation animateIn={style.SlideInFromBottom150ms} animateOnce={true}>
                        <h2 className={style.NameTitle}>Hi! I am Vlad Kulesh!</h2>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn={style.SlideInFromBottom150ms} animateOnce={true}>
                        <div className={style.textBlockAboutMe}>
                            <p className={style.AboutMeDescription}>
                                I'm a designer & developer with a passion for web design.
                                I enjoy developing simple, clean and slick websites that provide real value to the end
                                user
                                . Thousands of clients have procured exceptional results while working with me.
                                Delivering work within time and budget which meets client’s requirements is our
                                I'm a designer & developer with a passion for web design.
                                I enjoy developing simple, clean and slick websites that provide real value to the end
                                user
                                . Thousands of clients have procured exceptional results while working with me.
                                Delivering work within time and budget which meets client’s requirements is our
                            </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={style.SlideInFromBottom150ms} animateOnce={true}>
                        <div className={style.itemContainer}>
                            <div className={style.item}>
                                <p>From:</p>
                                <p>Minsk,Belarus</p>
                            </div>
                            <div className={style.item}>
                                <p>Date of birth:</p>
                                <p>December,1997 19</p>
                            </div>
                            <div className={style.item}>
                                <p>Email:</p>
                                <p>kulesh_uladzislau@mail.ru</p>
                            </div>
                            <div className={style.item}>
                                <p>Name:</p>
                                <p>Kulesh Vlad</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>

    )
        ;
};

