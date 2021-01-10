import React from 'react'

function Cart(props) {

    const cart = props.cart

    // const total=cart.reduce((total,prd)=>total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;

    if (total > 35) {
        shipping = 0;
    }

    else if (total > 15) {
        shipping = 4.99;
    }

    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2)
    const GrandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precison = num.toFixed(2)
        return Number(precison);
    }
    return (
        <div>
            <h1>Order Summery</h1>
            <p>Item Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax + vat: {tax}</p>
            <p>Total Price:{GrandTotal}</p>
            <br/>
            { 
            props.children
            }
        </div>
    )
}

export default Cart
