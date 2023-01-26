import React from 'react';
import style from './Main.module.scss'
import photo from '../assets/image/images/IMG_20221116_171414-removing&cutting.png'
const Main = () => {
    return (
        <div className={style.mainBlock} id={'main'}>
            <div className={style.container}>
            <div className={style.intro}>
                <h2 className={style.name}>I am Zhanna Bokhan</h2>
                <div className={style.prof}> FRONTEND DEVELOPER</div>
            </div>
            <div className={style.photo}>
                <img src={photo}/>
            </div>
        </div>
            <div className={style.section}></div>
        </div>
    );
};

export default Main;