import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) =>{  
    let transformedIngredients = Object.keys(props.ingredients)
    .map((key)=>{  
        return [...Array(props.ingredients[key])].map((_ , i) => {
            return <BurgerIngredient key={key+i} type={key} />
        })
    });
    var newtransformedIngredients = Array.prototype.concat.apply([], transformedIngredients);
    if(newtransformedIngredients === 0)
        newtransformedIngredients = <p>Please enter ingredients</p>
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="Bread-Top"></BurgerIngredient>
            {newtransformedIngredients}
            <BurgerIngredient type="Bread-Bottom"></BurgerIngredient> 
        </div>
    );  
}

export default Burger;