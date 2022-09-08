import React from 'react'
import "../home/styles/homeMainInfo.css"


const MainInfoHome = () => {
  return (
    <section className='header__info' >
      <div className="header__info-content">
        <h3>
          Easiest way to buy a product
        </h3>
        <h2 className='header__info-title'>
           <span>Products?</span> Just wait them at <span>your door</span> 
        </h2>
        <p className='header__info-text' >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!
        </p>
        <div className="header__info-btns">
          <button>Order</button>
          <button>Contact</button>
        </div>
        <div className="header__info-trust">
          <div>
          <i class="fa-solid fa-sack-dollar"></i>
            <p>No shipping charge</p>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <p>100% secure checkout</p>
          </div>
        </div>
      </div>
      <img className='header__info-img' src="/images/e.svg" alt="" />
    </section>
  )
}

export default MainInfoHome