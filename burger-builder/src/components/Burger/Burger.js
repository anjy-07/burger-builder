import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (prop) =>{    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="Bread-Top"></BurgerIngredient>
            <BurgerIngredient type="Cheese"></BurgerIngredient>
            <BurgerIngredient type="Bacon"></BurgerIngredient>
            <BurgerIngredient type="Bread-Bottom"></BurgerIngredient>
        </div>
    );  
}

export default Burger;