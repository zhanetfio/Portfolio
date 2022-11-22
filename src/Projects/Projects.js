import React from 'react';
import style from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>PROJECTS</h2>
                <div className={style.separator}></div>
                <div className={style.projects}>
                    <Project title='Social Network' description="Short description about project..."/>
                    <Project title='To Do List' description="Short description about project..."/>
                    <Project title='learning Cards' description="Short description about project..."/>
                </div>
            </div>

        </div>
    );
};

export default Projects;