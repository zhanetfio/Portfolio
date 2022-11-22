import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import jsIcon from "../assets/image/icons/js-svgrepo-com.svg";
import cssIcon from "../assets/image/icons/css-fill-svgrepo-com.svg";
import reactIcon from "../assets/image/icons/react-svgrepo-com.svg";
import reduxIcon from "../assets/image/icons/redux-svgrepo-com.svg";
import tsIcon from "../assets/image/icons/typescript-svgrepo-com.svg";
import axiosIcon from "../assets/image/icons/grade-a-svgrepo-com.svg";
import htmlIcon from "../assets/image/icons/html-fill-svgrepo-com.svg"
import formIcon from "../assets/image/icons/edit-form-svgrepo-com.svg";
import muiIcon from "../assets/image/icons/material-ui-svgrepo-com.svg";
import testIcon from "../assets/image/icons/education-quiz-svgrepo-com.svg";
import storyIcon from "../assets/image/icons/storybook-svgrepo-com.svg";
import postmanIcon from "../assets/image/icons/postman-svgrepo-com.svg";
import sassIcon from "../assets/image/icons/sass-svgrepo-com.svg";
import gIcon from "../assets/image/icons/git-svgrepo-com2.svg"


const Skills = () => {
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>SKILLS</h2>
                <div className={style.separator}></div>
                <div className={style.skills}>
                    <Skill title='React'
                           description="An open source JavaScript library for developing user interfaces. Can be used to develop single page and mobile applications" icon={<img src={reactIcon} alt={'react'}/>}/>
                    <Skill title={'Redux'} description={'An open source JavaScript library for managing application state'} icon={<img src={reduxIcon} alt={'redux'}/>}/>
                    <Skill title={'Typescript'} description={'A programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript'} icon={<img src={tsIcon} alt={'ts'}/>}/>
                    <Skill title={'JS'} description={'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'} icon={<img src={jsIcon} alt={'js'}/>}/>
                    <Skill title={'Axios'} description={'An open source library that allows you to make HTTP requests'} icon={<img src={axiosIcon} alt={'axios'}/>}/>
                    <Skill title={'Formik'} description={'A library that helps you work with forms. It simplifies getting data from a form, validating data, displaying error messages, and more'} icon={<img src={formIcon} alt={'formik'}/>}/>
                    <Skill title={'Material UI'} description={'A framework that produces ready-made Google solutions for fast and fairly simple web development'} icon={<img src={muiIcon} alt={'mui'}/>}/>
                    <Skill title={'Unit testing'} description={'The process of programming, checking the correctness of individual modules of the source code of programs'} icon={<img src={testIcon} alt={'test'}/>}/>
                    <Skill title={'Storybook'} description={'A UI library that can be used to document components. It also allows you to organize and assemble components'} icon={<img src={storyIcon} alt={'storybook'}/>}/>
                    <Skill title={'Postman'} description={'An API platform that allows developers to design, build, test, and iterate their APIs'} icon={<img src={postmanIcon} alt={'postman'}/>}/>
                    <Skill title='HTML' description="The standard markup language for documents designed to be displayed in a web browser" icon={<img src={htmlIcon} alt={'html'}/>}/>
                    <Skill title='CSS' description="A Style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML" icon={<img src={cssIcon} alt={'css'}/>}/>
                    <Skill title={'Sass'} description={'A CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files'} icon={<img src={sassIcon} alt={''}/>}/>
                    <Skill title={'Git'} description={'A free and open source distributed version control system designed to process any project quickly and efficiently'} icon={<img src={gIcon} alt={''}/>}/>

                </div>
            </div>
            <div className={style.section}></div>
        </div>
    );
};
export default Skills
