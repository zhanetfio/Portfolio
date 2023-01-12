import React from 'react';
import style from './Project.module.scss'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                    <a className={style.link}
                       href={props.href}
                       target={'_blank'}
                       >View</a>
            </div>
            <div className={style.title}>{props.title}</div>
            <span className={style.description}>{props.description}</span>
        </div>
    )
};

/*'https://kirill2690.github.io/cards-front/'*/
export default Project;