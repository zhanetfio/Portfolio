import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Zhanna Bokhan</h3>
                <div className={style.socialContainer}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>

            </div>
        </div>
    );
};

export default Footer;