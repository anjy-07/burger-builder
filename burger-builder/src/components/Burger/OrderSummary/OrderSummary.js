import React from 'react';
//import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(
        (key) => {
            return (<li key={key}> 
                <span style={{textTransform:`capitalize`}}> {key} </span> 
                : {props.ingredients[key]} 
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
            <p><strong>Total Price: </strong> {props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
             <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
             <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
           
        </Aux>
    );
}
export default OrderSummary;