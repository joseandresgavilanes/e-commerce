import React from 'react'
import { useState } from 'react'

import "../ProductDetail/styles/ProductDescription.css"

const ProductDescription = ({productInfo}) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
        setCounter(counter+1)
    }

    const handleMinus = () => {
        if (counter > 1) {
            setCounter(counter-1)
            
        }
    }



    console.log(productInfo);
  return (
        
    <section class="product-info__card">
        <div class="product-info__left">
            <img src={productInfo?.productImgs[0]} alt="shoe"/>
            <i class="arrow fa fa-long-arrow-left"></i>
            <i class="arrow fa fa-long-arrow-right"></i>
        </div>
        <div class="product-info__right">
        <div class="product-info__content">
            <h1 className='product-info__name'>{productInfo?.title}</h1>
            <div class="details">
            <h3>Winter Collection</h3>
            <h2>Men Black Sneakers</h2>
            <h4><span class="fa fa-dollar"></span>{productInfo?.price}</h4>
            <h4 class="dis"><span class="fa fa-dollar"></span>{(Number(productInfo?.price) + 100)}</h4>
            </div>
            <ul>
            <li>SIZE</li>
            <li class="bg">7</li>
            <li class="bg">8</li>
            <li class="bg">9</li>
            <li class="bg">10</li>
            <li class="bg">11</li>
            </ul>
            <ul>
            <li>COLOR</li>
            <li class="yellow"></li>
            <li class="black"></li>
            <li class="blue"></li>
            </ul>

            <div  className="product-info__quantity-btns">
                    <button onClick={handleMinus} >-</button>
                    <div>{counter}</div>
                  <button onClick={handlePlus}>+</button>
            </div>
            <div className="product-info__foot-btns" >
                <span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span>
                <span class="foot"><i class="fa fa-shopping-cart"></i>Cart</span>
            </div>
        </div>
        </div>
    </section> 
    
    )
}

export default ProductDescription




//   <section className='product-info'>
//         <h2 className='product-info__name'>{productInfo?.title}</h2>
//         <div className="product-info__body">
//             <article  className="product-info__price">
//                 <h3  className="product-info__price-label">Price</h3>
//                 <span  className="product-info__price-value">{productInfo?.price}</span>
//             </article>
//             <article  className="product-info__quantity">
//                 <h3  className="product-info__quantity-label">
//                     Quantity
//                 </h3>
//                 <div  className="product-info__quantity-">
//                     <button onClick={handleMinus} >-</button>
//                     <div>{counter}</div>
//                     <button onClick={handlePlus}>+</button>
//                 </div>
//             </article>
//         </div>
//     </section>


