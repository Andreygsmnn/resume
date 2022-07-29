import React from 'react';
import classes from '../StyleModules/PortfolioLayoutPost.module.css'


function PortfolioLayoutPost(props){

    return(
        <div className={classes.postContainer}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.reference}>{props.reference}</div>
        </div>
    )
}
export default PortfolioLayoutPost;