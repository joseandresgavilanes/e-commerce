import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../Styles/header.css"


const Header = () => {
  return (
    <header className="header">
        <NavLink to="/">
            <h1>E-Commerce</h1>
        </NavLink>
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item"><NavLink className={({isActive}) => isActive ? "active-link" : "" } to="/login">Login</NavLink></li>
                <li className="header__item"><NavLink className={({isActive}) => isActive ? "active-link" : "" } to="/purchases">Purchases</NavLink></li>
                <li className="header__item">Cart</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header