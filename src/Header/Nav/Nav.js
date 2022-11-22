import React from 'react';
import style from './Nav.module.scss'


const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="" className={style.item}>Main</a>
            <a href=""  className={style.item}>Skills</a>
            <a href=""  className={style.item}>Projects</a>
            <a href=""  className={style.item}>Contacts</a>
        </div>
    );
};

export default Nav;