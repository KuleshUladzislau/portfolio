import React, {useEffect, useState} from 'react';
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
import {toast} from "react-toastify";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";


export const Contacts = ({contactsState}) => {
    const icon = [
        {img:telegram,link:'https://t.me/kulesh_uladzsislau'},
        {img:git,link:'https://github.com/KuleshUladzislau'},
        {img:link,link:'https://www.linkedin.com/in/uladzislau-kulesh-0446ba286/'},

        ]


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        },


    })

    const onSubmitHandler = async (data) => {

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message

        }
        await toast.promise(
            emailjs.send(
                'service_46hit9n',
                'template_e0gngbw',
                templateParams,
                'ot89EGfgctJ9-k6PJ'
            ),
            {
                pending: 'Waiting...',
                success: 'Your letter has been sent!',
                error: 'an error occurred, try again'
            }
        )

        reset()


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
                                    {errors.name && <div className={style.error}>{contactsState.errors.name}</div>}


                                    <label className={style.label}>{contactsState.email}</label>
                                    <input className={style.userNameInput}
                                           type='text' {
                                               ...register('email',
                                                   {
                                                       required: true, pattern: {
                                                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                           message: contactsState.errors.email,
                                                       }
                                                   }
                                               )}/>
                                    {errors.email && <div className={style.error}>{errors.email.message ? errors.email.message : contactsState.errors.message}</div>}
                                    <label className={style.label}>{contactsState.help}</label>
                                    <textarea name="" id="" cols="30"
                                              rows="5" {...register('message', {required: true})}></textarea>
                                    {errors.message &&
                                        <div className={style.error}>{contactsState.errors.message}</div>}

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
                                    <p className={style.labelPhone}><b>{contactsState.phone}</b></p>
                                    <p className={style.phoneNumber}>+375 25 744-59-80</p>
                                </ScrollAnimation>
                            </div>
                            <div className={style.phone}>
                                <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                                    <p className={style.labelPhone}><b>{contactsState.living}</b></p>
                                    <p className={style.phoneNumber}>{contactsState.address}</p>
                                </ScrollAnimation>
                            </div>

                            <ScrollAnimation animateIn={style.SlideIn} animateOnce={true}>
                                <div className={style.iconContainer}>
                                    {
                                        icon.map((el, index) => <Icon key={index} img={el.img} link={el.link}/>)
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

