import React from 'react';
import style from './Projects.module.scss'
import Project from "./Project/Project";
import todoImage from '../assets/image/images/todo.png'
import cardsImage from '../assets/image/images/cards.jpg'
import counterImage from '../assets/image/images/counter.png'
import snetImage from '../assets/image/images/network.png'


const Projects = () => {

    const todo = {backgroundImage: `url(${todoImage})`}
    const cards = {backgroundImage: `url(${cardsImage})`}
    const snet =  {backgroundImage: `url(${snetImage})`}
    const counter =  {backgroundImage: `url(${counterImage})`}

    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={style.projectsContainer}>
                <h2 id={'projects'} className={style.title}>PROJECTS</h2>
                <div className={style.separator}></div>
                <div className={style.projects}>
                    <Project href={'https://todolist-green-two.vercel.app/'} style={todo} title='To Do List'
                             description={`A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list. `} gitHubLink={'https://github.com/zhanetfio/Todolist'} />

                    <Project href={'https://kirill2690.github.io/cards-front/'} style={cards} title='Learning Cards'
                             description={`Is a card bearing information, which is intended to be used as an aid in memorization. Flashcards are often used to memorize vocabulary, historical dates.`} gitHubLink={'https://github.com/Kirill2690/cards-front'}/>
                    <Project href={'About\n' +
                        'https://zhanetfio.github.io/SNet/'} style={snet} title='Social Network'
                             description={'An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work.'} gitHubLink={'https://github.com/zhanetfio/SNet'}/>
                    <Project href={'https://counter-delta-cyan.vercel.app/'} style={counter} title='Counter' description={`Counter with simple settings.`} gitHubLink={'https://github.com/zhanetfio/Counter'}  />

                </div>
            </div>
        </div>


    )
        ;
};

export default Projects;