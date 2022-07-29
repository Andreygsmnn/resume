import React from 'react';
import { NavLink } from 'react-router-dom';

import '../StyleModules/NavbarStyle.css';

function NavbarComponent() {

    return (
        <header className="header">
            <input type="checkbox" id="menu"></input>
            <label className="label-menu" htmlFor="menu"></label>
            <div className="burger-line first"></div>
            <div className="burger-line second"></div>
            <div className="burger-line third"></div>
            <div className="burger-line four"></div>
            <nav className="navbar-mobile" >
               
                <NavLink className="zero" to='/'>
                    <button className="button-mobile">Главная</button>
                </NavLink>
                <NavLink className="zero" to='/portfolio'>
                    <button className="button-mobile">Портфолио</button>
                </NavLink>
                <NavLink className="zero" to='/useful'>
                    <button className="button-mobile">Полезное для Frontend</button>
                </NavLink>
                <NavLink className="zero" to='/feedback'>
                    <button className="button-mobile">Напишите для связи</button>
                </NavLink>
            </nav>


            <nav className="navbar">
                <div className="navbarItem">
                    <NavLink to='/'>
                        <button className="myButton" >Главная</button>
                    </NavLink>
                </div>
                <div className="navbarItem">
                    <NavLink to='/portfolio'>
                        <button className="myButton">Портфолио</button>
                    </NavLink>
                </div>

                <div className="navbarItem">
                    <NavLink to='/useful'>
                        <button className="myButton">Полезное для Frontend</button>
                    </NavLink>
                </div>

                <div className="navbarItem">
                    <NavLink to='/feedback'>
                        <button className="myButton">Напишите для связи</button>
                    </NavLink>
                </div>
            </nav>
        </header>


    )
}

export default NavbarComponent;