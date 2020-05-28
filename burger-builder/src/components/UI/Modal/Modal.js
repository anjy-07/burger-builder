import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
       return  nextProps.show !== this.props.show || nextProps.clicked !== this.props.clicked
    }

    render() {  
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div 
                    style={{
                        transform : this.props.show? `translateY(0)` : `translateY(-100vh)`,
                        opacity : this.props.show ? '1' : '0'
                    }}
                    className={classes.Modal}>
                        {this.props.children}
                </div>
            </Aux>
        );    
    }
}