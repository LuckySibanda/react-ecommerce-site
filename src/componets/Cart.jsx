import React from "react";
import PropTypes from 'prop-types'

export default function Cart(props) {

    const styles = {
        backgroundColor: props.show === 'true' ? 'lightblue' : 'lightgreen'
    }

    return(
        <div style={styles}>
            <div>{props.cartCounter}</div>
            <div>{props.name} {props.quantity}</div>
            <button onClick={props.handleCartClick}>Click me</button>
        </div>
    )
}

Cart.propTypes = {
    show: PropTypes.bool.isRequired,
    handleCartClick: PropTypes.func.isRequired,
    cartCounter: PropTypes.number.isRequired,

    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}