import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpeg';
import Meals from '../Meals/Meals';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {
return <Fragment>
    <header className={classes.header}>
        <h1> React Meals </h1>
        <HeaderCartButton> Cart </HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
    <img src={mealsImage} alt="meals"/>
    </div>
    <Meals></Meals>
</Fragment>
}

export default Header;