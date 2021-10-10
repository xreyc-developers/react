import React from 'react';
import './Card.css'

const Card = (props) => {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;

/**
 * childred property is a reserved name for Reactjs
 * Wrap element using this component will go to the children
 */