import React from 'react';
import style from './Icon.module.css'

export const Icon = ({img,link}) => {
    return (
        <div className={style.icon}>
            <a href={link} target={'_blank'}>
                <img src={img} alt=""/>
            </a>
        </div>
    );
};

