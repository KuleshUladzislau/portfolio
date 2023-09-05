import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import buttonStyle from '../main/Main.module.css'
import telegram from '../common/photos/iconsFooter/telegram.svg'
import inst from '../common/photos/iconsFooter/inst.svg'
import git from '../common/photos/iconsFooter/git.svg'
import link from '../common/photos/iconsFooter/linkedIn.svg'
import {Icon} from "../Footer/Icon/Icon";
import ScrollAnimation from "react-animate-on-scroll";
import {Footer} from "../Footer/Footer";

export const Contacts = () => {
    const icon = [telegram, inst, git, link]


    return (
        <div id='contacts' className={style.Contacts}>
            <div className={`${styleContainer.container} ${style.ContactsContainer}`}>
                <div className={style.ContactsWrapper}>
                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                        <h2>Contacts</h2></ScrollAnimation>
                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                        <div className={style.iconContainer}>
                            {
                                icon.map((el,index) => <Icon key={index} img={el}/>)
                            }

                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                        <form className={style.formContainer} action="">

                            <label className={style.label}>What is Your Name:</label>
                            <input className={style.emailInput} type="text"/>

                            <label className={style.label}>Your Email Address:</label>
                            <input className={style.userNameInput} type='text'/>

                            <label className={style.label}>How can I help You?:</label>
                            <textarea name="" id="" cols="30" rows="5"></textarea>

                            <div className={style.buttonForm}>

                                    <button className={buttonStyle.buttonView}>send</button>

                            </div>


                        </form>
                    </ScrollAnimation>

                </div>
            </div>
        </div>
    );
};

