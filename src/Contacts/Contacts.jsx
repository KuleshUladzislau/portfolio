import React, {useState} from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import buttonStyle from '../main/Main.module.css'
import telegram from '../common/photos/iconsFooter/telegram.svg'
import inst from '../common/photos/iconsFooter/inst.svg'
import git from '../common/photos/iconsFooter/git.svg'
import link from '../common/photos/iconsFooter/linkedIn.svg'
import {Icon} from "../Footer/Icon/Icon";
import ScrollAnimation from "react-animate-on-scroll";
import {useForm} from "react-hook-form";
import * as emailjs from "emailjs-com";


export const Contacts = ({contactsState}) => {
    const icon = [telegram, inst, git, link]


    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmitHandler = (data) => {

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message

        }
        emailjs.
        send(
            'service_46hit9n',
            'template_e0gngbw',
            templateParams,
            'ot89EGfgctJ9-k6PJ'
        ).then(() => {
            reset()
        })
    }

    return (
        <div id={contactsState.id} className={style.Contacts}>
            <div className={`${styleContainer.container} ${style.ContactsContainer}`}>
                <div className={style.ContactsWrapper}>
                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                        <h2 className={style.title}>{contactsState.h2}</h2>
                    </ScrollAnimation>

                    <div className={style.contentContainer}>
                        <div className={style.formWrapper}>
                            <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                                <form className={style.formContainer} onSubmit={handleSubmit(onSubmitHandler)}>

                                    <label className={style.label}>{contactsState.name}</label>
                                    <input className={style.emailInput}
                                           type="text" {...register('name', {required: true})}/>

                                    <label className={style.label}>{contactsState.email}</label>
                                    <input className={style.userNameInput}
                                           type='text' {...register('email', {required: true})}/>

                                    <label className={style.label}>{contactsState.help}</label>
                                    <textarea name="" id="" cols="30"
                                              rows="5" {...register('message', {required: true})}></textarea>

                                    <div className={style.buttonForm}>

                                        <button className={buttonStyle.buttonView}>send</button>

                                    </div>
                                </form>
                            </ScrollAnimation>
                        </div>
                        <div className={style.letterWrapper}>

                                <h3 className={style.recomendationForUser}>
                                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                                    {contactsState.recommendationForUser}
                                    </ScrollAnimation>
                                </h3>
                                <div className={style.phone}>
                                    <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                                    <p>{contactsState.phone} +375 (25) 744-59-80</p>

                                    </ScrollAnimation>
                                </div>

                            <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                                <div className={style.iconContainer}>
                                    {
                                        icon.map((el, index) => <Icon key={index} img={el}/>)
                                    }

                                </div>
                            </ScrollAnimation>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

