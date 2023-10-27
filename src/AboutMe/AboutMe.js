import React from 'react';
import containerStyle from '../common/styles/Container.module.css'
import animationStyle from '../common/styles/animation.module.css'
import style from '../AboutMe/AboutMe.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

export const AboutMe = ({aboutMeState}) => {
    const {
        h2,
        descriptionAboutMe,
        items,
        id

    } = aboutMeState

    const itemsBlock = items.map(i=>{
        return(
            <div className={style.item}>
                <p className={style.itemTitle}>{i.title}</p>
                <p className={style.itemDescription}>{i.description}</p>
            </div>
        )
    })
    return (

        <div className={style.AboutMe} id={id}>
            <div className={`${containerStyle.container} ${style.aboutMeContainer}`}>

                <div className={style.wrapperAboutMe}>


                    <ScrollAnimation animateIn={style.SlideInFromBottom150ms} animateOnce={true}>
                        <div className={style.NameTitle}>
                            <h2>{h2}</h2>
                        </div>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn={style.SlideInFromBottom150ms} animateOnce={true}>
                        <div className={style.textBlockAboutMe}>
                            <p className={style.AboutMeDescription}>
                                {descriptionAboutMe}
                            </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={style.SlideInFromBottom150ms} animateOnce={true}>
                        <div className={style.itemContainer}>
                            {itemsBlock}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>

    )
        ;
};

