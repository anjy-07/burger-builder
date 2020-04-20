import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>
                   <Burger></Burger>
                </div>
                <div>
                    BurgerControls
                </div>
            </Aux>

        )
    }
}

export default BurgerBuilder;
