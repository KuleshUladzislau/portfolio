import React from 'react';
import style from './Icon.module.css'

export const Icon = ({img}) => {
    return (
        <div className={style.icon}>
            <img src={img} alt=""/>
        </div>
    );
};

