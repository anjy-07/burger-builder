import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) =>{  
    let transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
        return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    
    if(transformedIngredients === 0)
        transformedIngredients = <p>Please enter ingredients</p>
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="Bread-Top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="Bread-Bottom"></BurgerIngredient> 
        </div>
    );  
}

export default Burger;