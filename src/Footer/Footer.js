import React from 'react';
import style from './Footer.module.scss';
import github from"../assets/image/icons/github-svgrepo-com.svg";
import telegram from "../assets/image/icons/telegram-svgrepo-com.svg";
import linkedin from "../assets/image/icons/linkedin-with-circle-svgrepo-com.svg";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={` ${style.footerContainer}`}>
                <h3 className={style.title}>Zhanna Bokhan</h3>
                <div className={style.socialContainer}>
                    <div className={style.social}><a href={'https://github.com/zhanetfio'} target={'_blank'} rel="noreferrer" ><img src={github} alt={"github"}/></a></div>
                    <div className={style.social}><a href={'https://t.me/marijane2'} target={'_blank'} rel="noreferrer" ><img src={telegram} alt={"telegram"}/></a></div>
                    <div className={style.social}><a href={'www.linkedin.com/in/zhanna-bokhan-737967251'} target={'_blank'} rel="noreferrer"><img src={linkedin} alt={"linkedin"}/></a></div>

                </div>

            </div>
        </div>
    );
};

export default Footer;