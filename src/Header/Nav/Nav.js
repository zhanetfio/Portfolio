import React from 'react';
import style from './Nav.module.scss'


const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="#main" className={style.item}>MAIN</a>
            <a href="#skills"  className={style.item}>SKILLS</a>
            <a href="#projects"  className={style.item}>PROJECTS</a>
            <a href="#contacts"  className={style.item}>CONTACTS</a>
        </div>
    );
};

export default Nav;