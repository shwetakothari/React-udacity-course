import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const price = `$${props.meal.price.toFixed(2)}`
    return <li className={classes.meal}>
        <h3>{ props.meal.name }</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>
            {price}
        </div>
        <MealItemForm id={props.meal.id}></MealItemForm>
    </li>
}

export default MealItem;