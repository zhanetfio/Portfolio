import React from 'react';
import style from './Contacts.module.scss'
import loco from "../assets/image/icons/location-svgrepo-com .svg";
import phone from "../assets/image/icons/phone-svgrepo-com .svg";
import email from "../assets/image/icons/email-svgrepo-com.svg"

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.section}></div>
            <div className={` ${style.contactsContainer}`}>
                <h3 className={style.title}>CONTACTS</h3>
                <div className={style.separator}></div>
                {/*<div className={style.infoBlock}>*/}
                {/*    <div className={style.infoBlockItem}>*/}
                {/*        <div className={style.infoItem}>*/}
                {/*            <img src={loco} alt={"location"}/>*/}
                {/*            <span>Belarus, Minsk</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={style.infoBlockItem}>*/}
                {/*        <div className={style.infoItem}>*/}
                {/*            <img src={phone} alt={"phone"}/>*/}
                {/*            <a href="tel:+375336267719">*/}
                {/*               <span>+375336267719</span>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={style.infoBlockItem}>*/}
                {/*        <div className={style.infoItem}>*/}
                {/*            <img src={email} alt={"email"}/>*/}
                {/*            <a href="mailto:zhanetfio@gmail.com">*/}
                {/*                <span>zhanetfio@gmail.com</span>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <form className={style.contactsForm}>
                    <div className={style.row}>
                    <div className={style.inputField}>
                        <input type='name' placeholder="Your name"/>
                    </div>
                    <div className={style.inputField}>
                        <input type='email' placeholder="Your email"/>
                    </div>
                    </div>
                    <div className={style.inputField}>
                        <textarea className={style.textForm} placeholder="Your message"></textarea>
                    </div>
                </form>
                <button className={style.btn}>SEND</button>
            </div>
            <div className={style.section1}></div>

        </div>
    )
        ;
};

export default Contacts;