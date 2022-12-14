import React from 'react';
import andre from '../img/andre.jpeg';
import classes from '../StyleModules/ProfilePage.module.css';



const ProfilePageComponent = () => {
    return (
        <>
            <div className={classes.profile}>
                <div>
                    <img className={classes.profilePhoto} src={andre} alt='Здесь будет фото' />
                    <div className={classes.profileTodayDate}>Дата {(new Date()).toDateString()}</div>
                </div>
                <div className={classes.skills}>
                    <h2>Основные навыки</h2>
                    <ul>
                        <li>Html5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React, Redux, Axios, React-bootstrap</li>
                        <li>TypeScript</li>
                        <li>Git, GitHub</li>
                        <li>Python_3</li>
                        <li>Образование высшее: Архитектурно-строительный университет</li>
                    </ul>
                </div>
            </div>

            <div className={classes.aboutMe}>
                <div className={classes.aboutMeTitle}>
                    Доброго времени суток. О себе и личных качествах ниже!
                </div>
                <div className={classes.aboutMeDescription}>
                    Меня зовут Андрей! Возраст 33 года, живу в Москве. Увлекаюсь версткой и написанием singlePageApplication на React. На текущий момент сделал несколько
                    pet проектов на react. Проекты и ссылки на GitHub во вкладке портфолио.
                    До обучения web-технологиям занимался предпринимательской деятельностью по настройке сетевого оборудования...Ищу
                    работодателя на вакансию Front-end Developer(React). От себя могу гарантировать быструю обучаемость,
                    ответственное отношение к работе.
                </div>
            </div>
        </>

    )
}

export default ProfilePageComponent;