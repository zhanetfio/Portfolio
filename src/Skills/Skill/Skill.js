import React from 'react';
import style from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <h3 className={style.iconTitle}>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Skill;