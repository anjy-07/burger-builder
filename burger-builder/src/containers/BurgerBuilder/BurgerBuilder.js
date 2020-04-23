import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad : 0.5,
    bacon : 1.5,
    cheese : 1.6,
    meat : 2.5
}
class BurgerBuilder extends Component {
    state  = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchasableState(ingredients){
        const sum = Object.keys(ingredients).map((key) => ingredients[key]).reduce((item,acc) => acc+item, 0)
        this.setState( {purchasable : sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice, ingredients: updatedIngredients})
        this.updatePurchasableState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0 )
            return;
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice : newPrice, ingredients: updatedIngredients})
        this.updatePurchasableState(updatedIngredients);
    }

    render() {
       const disableInfo = {
           ...this.state.ingredients
       } 
       for(let key in disableInfo){
        disableInfo[key] = disableInfo[key] <=0
       }
       return (
            <Aux>
                <div>
                   <Burger ingredients = {this.state.ingredients}></Burger>
                </div>
                <div>
                    <BuildControls 
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemoved={this.removeIngredientHandler}
                    disabled = {disableInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    >   
                    </BuildControls>
                </div>
            </Aux>

        )
    }
}

export default BurgerBuilder;
