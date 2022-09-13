import React from 'react';
import style from './Project.module.css'


const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>

                <a href="" className={style.button}>View</a>
            </div>
            <div className={style.title}>{props.title}</div>
            <span  className={style.description}>{props.description}</span>

        </div>
    );
};

export default Project;