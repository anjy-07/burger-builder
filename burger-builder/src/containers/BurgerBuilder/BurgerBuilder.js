import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () =>{
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () =>{
        this.setState({purchasing : false})
    }
    purchaseContinueHandler = () =>{
        alert("Continue!")
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients} 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalPrice}></OrderSummary>
                </Modal>
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
                    ordered={this.purchaseHandler}
                    >   
                    </BuildControls>
                </div>
            </Aux>

        )
    }
}

export default BurgerBuilder;
