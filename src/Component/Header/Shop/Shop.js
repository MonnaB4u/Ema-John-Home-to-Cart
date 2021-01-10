import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fakeData from '../../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager'
import Cart from '../Cart/Cart'
import Header from '../Header'
import Product from '../Product/Product'
import './Shop.css'


function Shop() {
    const first10 = fakeData.slice(0, 10)
    const [products] = useState(first10)
    const [cart,setCart] = useState([])

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingkey=>{
            const product = fakeData.find(pd => pd.key === existingkey);
            product.quantity = savedCart[existingkey];
            return product;
        })
    setCart(previousCart);
        }, [])

    const handleAddProduct=(product) =>{
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd =>pd.key=== toBeAddedKey)
        let count = 1;
        let newCart
        if(sameProduct){
          count = sameProduct.quantity + 1
            sameProduct.quantity=count;
            const othres = cart.filter(pd=>pd.key !=toBeAddedKey )
             newCart = [...othres , sameProduct];
        }else{
            product.quantity =1;
            newCart=[...cart , product];
        }
       
        setCart(newCart);
        
        addToDatabaseCart(product.key, count);
    }

    return (
        <div>
            <div>
      <Header></Header>
      </div>
        <div className='shop-container'>


            <div className="product-container">
                {
                    products.map(pd => <Product addToCart={true} key={pd.key} handleAddProduct={handleAddProduct} product={pd} > </Product>)
                }
            </div>

            <div className="cart-container">
            
                <Cart cart={cart}>
                    <Link to='/review'>
                    <button className="main-btn">Review</button>
                    </Link>
                </Cart>
            </div>

        </div>

        </div>
    )
}

export default Shop
