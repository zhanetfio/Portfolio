import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../././common/styles/Container.module.css'
const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.intro}>
                <h2 className={style.name}>I am Zhanna Bokhan</h2>
                <div className={style.prof}> FRONTEND DEVELOPER</div>
            </div>
            <div className={style.photo}></div>
        </div>
            <div className={style.section}></div>
        </div>
    );
};

export default Main;