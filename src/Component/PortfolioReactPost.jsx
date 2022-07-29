import React from 'react';
import classes from '../StyleModules/PortfolioReactPost.module.css';


function PortfolioReactPost(props) {


    return (
        <div>
            <div className={classes.postContainer}>
                <div className={classes.title}> {props.title}</div>
                <div className={classes.description}> {props.description}</div>
                <div className={classes.reference}> {props.reference}</div>
            </div>

        </div>
    )
}
export default PortfolioReactPost;