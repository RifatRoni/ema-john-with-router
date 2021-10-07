import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    /*
    //standard way
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0)
    */
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart) {
        // product.quantity = !product.quantity ? 1: product.quantity;
        if(!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    
    const shipping = total > 0 ? 15: 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            {/* <h5>Items Ordered: {props.cart.length}</h5> */}
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;