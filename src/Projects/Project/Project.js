import React from 'react';
import style from './Project.module.scss'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                    <a className={style.link}
                       href={props.href}
                       target={'_blank'}
                       rel="noreferrer"
                       >Demo</a>
            </div>
            <div className={style.title}>{props.title}</div>
            <span className={style.description}>{props.description}</span>
            <a href={props.gitHubLink} style={{color:'black'}}>GitHub Link</a>
        </div>
    )
};


export default Project;