import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';
const BurgerIngredient = (props) => {  
    let ingredients = null;
    switch(props.type){
        case('Bread-Bottom'):
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
        case('meat'):
            ingredients = <div className={classes.Meat}></div>;
            break;
        case('cheese'):
            ingredients = <div className={classes.Cheese}></div>;
            break;
        case('salad'):
            ingredients = <div className={classes.Salad}></div>;
            break;
        case('bacon'):
            ingredients = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredients=null;
        
    }
    return ingredients;
   
}

BurgerIngredient.prototype = {
    type : PropTypes.String
}

export default BurgerIngredient;