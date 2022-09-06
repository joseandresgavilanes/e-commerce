import React from 'react'
import "../home/styles/homeMainInfo.css"


const MainInfoHome = () => {
  return (
    <section className='header__info' >
      <div className="header__info-content">
        <h3>
          Easy way to make an order
        </h3>
        <h2 className='header__info-title'>
           <span>HUNGRY?</span> Just wait food at <span>your door</span> 
        </h2>
        <p className='header__info-text' >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!
        </p>
        <div className="header__info-btns">
          <button>Order</button>
          <button>Order</button>
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
      <img className='header__info-img' src="/public/images/e.svg" alt="" />
    </section>
  )
}

export default MainInfoHome