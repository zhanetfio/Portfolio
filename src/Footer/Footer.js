import React from 'react';
import style from './Footer.module.scss';
import github from"../assets/image/icons/github-svgrepo-com.svg";
import telegram from "../assets/image/icons/telegram-svgrepo-com.svg";
import linkedin from "../assets/image/icons/linkedin-with-circle-svgrepo-com.svg";
import skype from "../assets/image/icons/skype-svgrepo-com.svg";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={` ${style.footerContainer}`}>
                <h3 className={style.title}>Zhanna Bokhan</h3>
                <div className={style.socialContainer}>
                    <div className={style.social}><img src={github} alt={"github"}/></div>
                    <div className={style.social}><img src={telegram} alt={"telegram"}/></div>
                    <div className={style.social}><img src={linkedin} alt={"linkedin"}/></div>
                    <div className={style.social}><img src={skype} alt={"skype"}/></div>
                </div>

            </div>
        </div>
    );
};

export default Footer;