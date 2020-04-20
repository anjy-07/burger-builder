import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';
const BurgerIngredient = (props) => {  
    let ingredients = null;
    switch(props.type){
        case('Bread-Botton'):
            ingredients = <div className={classes.BreadBottom}></div>;
            break;
        case('Bread-Top'):
            ingredients = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            );
            break;
        case('Meat'):
            ingredients = <div className={classes.BreadBottom}></div>;
            break;
        case('Cheese'):
            ingredients = <div className={classes.Cheese}></div>;
            break;
        case('Salad'):
            ingredients = <div className={classes.Salad}></div>;
            break;
        case('Bacon'):
            ingredients = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredients=null;
        
    }

    console.log("Ingredients", ingredients);

    return ingredients;
   
}

BurgerIngredient.prototype = {
    type : PropTypes.String
}

export default BurgerIngredient;