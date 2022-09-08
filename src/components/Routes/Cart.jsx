import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'
import '../Routes/styles/cart.css'

const Cart = () => {

  const [cartProducts, setCartProducts] = useState()

  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => setCartProducts(res.data.data.cart.products))
      .catch(err => setCartProducts())
  }

  useEffect(() => {
    getAllProductsCart()
  }, [])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
      })
      .catch(err => console.log(err))
  }

  return (
          
    <section class='cart__checkout'>
      <div class='cart__order'>
        <h2>Checkout</h2>
        <h5>Order #0101</h5>
        <ul class='cart__order-list'>
          {
                cartProducts?.map(product => (
                  <ProductCartInfo
                    key={product.id}
                    product={product}
                    getAllProductsCart={getAllProductsCart}
                  />
                ))
          }
        </ul>
        <h5>Shipping</h5><h4>$ 9.50</h4>
        <h5 class='cart__total'>Total</h5>
        <h2 class='cart__total-value'>$ 167.50</h2>
      </div>
      <div id='payment' class='cart__payment'>
        <h2>Payment</h2>
        <div class='cart__card'>
          <div class='cart__card-content'>
            <h5>Card Number</h5>
            <h6 id='label-cardnumber'>0000 0000 0000 0000</h6>
            <h5>Expiration<span>CVC</span></h5>
            <h6 id='label-cardexpiration'>00 / 0000<span>000</span></h6>
          </div>
          <div class='cart__wave'></div>
        </div>
        <div class='cart__card-form'>
            <p class='cart__field'>
            <input type='text' id='cardnumber' name='cardnumber' placeholder='1234 5678 9123 4567' pattern='\d*' title='Card Number' />
          </p>
          
          <div className="cart__card-form__bottom">
            <p class='cart__field cart__space'>
              
                <input type='text' id='cardexpiration' name='cardexpiration' placeholder="03 / 08" pattern="\d*" title='Card Expiration Date' />
            </p>
            <p class='field'>
                
                <input type='text' id='cardcvc' name='cardcvc' placeholder="123" pattern="\d*" title='CVC Code' />
            </p>
          </div>
          
          <button onClick={handleCheckout} class='cart__button-cta' title='Confirm your purchase'><span>PURCHASE</span></button>
        </div>
      </div>
    </section>
)
}

export default Cart