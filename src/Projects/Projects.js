import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h3 className={style.title}>Projects</h3>
                <div className={style.projects}>
                    <Project title='Social Network' description="Short description about project..."/>
                    <Project title='To Do List' description="Short description about project..."/>
                </div>
            </div>

        </div>
    );
};

export default Projects;