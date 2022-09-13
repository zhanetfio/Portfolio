import React from 'react';
import style from './Main.module.css'
import styleContainer from '../././common/styles/Container.module.css'
const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.intro}>
                <span>Hi there!</span>
                <h1>I am Zhanna Bokhan</h1>
                <p> Front-end Developer.</p>
            </div>
            <div className={style.photo}></div>
        </div>
        </div>
    );
};

export default Main;