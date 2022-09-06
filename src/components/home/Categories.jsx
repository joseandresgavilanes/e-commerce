import React from 'react'
import "../home/styles/categories.css"

const Categories = () => {
  return (
    <section className='categories' >
        <ul className='categories__list'>
            <li className='categories__item'>
                <i class="fa-solid fa-computer"></i>
                Computers
            </li>
            <li className='categories__item'>
            <i class="fa-solid fa-mobile-screen"></i>
                Smartphones
            </li>
            <li className='categories__item'>
                <i class="fa-solid fa-tv"></i>
                TV
            </li>
            <li className='categories__item'>
                <i class="fa-solid fa-laptop"></i>
                Laptop
            </li>
        </ul>
    </section>
  )
}

export default Categories