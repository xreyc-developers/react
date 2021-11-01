import React from "react";

// ASSETS
import mealsImage from '../../assets/meals.jpg';
// STYLES
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of foods"/>
            </div>
        </React.Fragment>
    )
}

export default Header;