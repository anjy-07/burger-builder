import React, { Component } from 'react';
//import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

export default class OrderSummary extends Component {
    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients).map(
            (key) => {
                return (<li key={key}> 
                    <span style={{textTransform:`capitalize`}}> {key} </span> 
                    : {this.props.ingredients[key]} 
                    </li>);
            }
        );
        return(
            <Aux>
                <h3> Your Order </h3>
                <p>A delicious burger with follwing ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: </strong> {this.props.price.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            
            </Aux>
        );
    }
}
