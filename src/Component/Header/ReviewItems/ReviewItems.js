import React from 'react';

const ReviewItems = (props) => {
    const {key, name, quantity }=props.product;
    const reviewItemStyle={
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px',
    }
    return (
        <div style={reviewItemStyle}  className='review-tiemts'>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-btn"
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;