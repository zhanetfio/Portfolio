import React from 'react';
import style from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Project from "./Project/Project";
import todoImage from '../assets/image/images/todo.png'
import cardsImage from '../assets/image/images/cards.jpg'


const Projects = () => {

    const todo = {backgroundImage: `url(${todoImage})`}
    const cards = {backgroundImage: `url(${cardsImage})`}

    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 id={'projects'} className={style.title}>PROJECTS</h2>
                <div className={style.separator}></div>
                <div className={style.projects}>
                    <Project href={''} style={todo} title='To Do List'
                             description="A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list..."/>

                    <Project href={'https://kirill2690.github.io/cards-front/'} style={cards} title='learning Cards'
                             description="Is a card bearing information, which is intended to be used as an aid in memorization. Flashcards are often used to memorize vocabulary, historical dates..."/>

                </div>
            </div>
        </div>


    )
        ;
};

export default Projects;