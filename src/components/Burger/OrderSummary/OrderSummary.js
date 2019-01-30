import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('[OrderSummary] willUpdate');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .filter(igKey => this.props.ingredients[igKey]>0)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingradients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}$</strong></p>
                <p>Continue to checkout?</p>

                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )

    }
};


export default OrderSummary;