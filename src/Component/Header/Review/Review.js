import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Header from '../Header';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyimg from '../../../images/giphy.gif'
import { useHistory } from 'react-router-dom';

const Review = () => {

  const [cart, setCart] = useState([]);
  const [orderPlaced , setOrdePlaced] = useState([false]);

  const removeProduct = (productKey) => {
    console.log("Remove click", productKey)
    const newCart = cart.filter(pd => pd.key !== productKey)
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }

  useEffect(() => {
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  
  const history=useHistory()


  const handleProceedCheckout=(()=>{
    // setCart([])
    // setOrdePlaced(true)
    // processOrder();
    history.push('/shipment')
  })

  let thankYou
  if(orderPlaced){
    thankYou = <img src={happyimg} alt=""/>
     }
  return (
    <div className="container">
    <div className="shop-container">
      
      <div className="product-container">
        <h1>Cart Items:{cart.length}</h1>
        {
          cart.map(pd => <ReviewItems
            key={pd.key}
            removeProduct={removeProduct}
            product={pd}></ReviewItems>)
        }
        
        {         thankYou      }
        
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
     <button onClick={handleProceedCheckout} className="main-btn">Proceed checkout</button>
        </Cart>
      </div>
    </div>
    </div>
  );
};

export default Review;