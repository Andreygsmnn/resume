import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../StyleModules/PortfolioComponent.module.css';



function PortfolioComponent() {


    return (
        <div >
            <div className={classes.buttons}>
                <div className={classes.buttonsItem}>
                    <NavLink to='/portfolio/react'>
                        <button className={classes.myButton}>React</button>
                    </NavLink>
                </div>
                <div className={classes.buttonsItem}>
                    <NavLink to='/portfolio/layout'>
                    <button className={classes.myButton}>Layout</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default PortfolioComponent;