import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/Slices/products.slice'
import CardHome from '../home/CardHome'
import Categories from '../home/Categories'
import HomeExtraDetails from '../home/HomeExtraDetails'
import MainInfoHome from '../home/MainInfoHome'


import "../../Styles/home.css"
import WhyUs from '../home/WhyUs'

const Home = () => {
    
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    

    const products = useSelector(state => state.products)

  return (
    <div className="home">
        <MainInfoHome/>
        <Categories/>
        <HomeExtraDetails/>
        <h2 className='home__container-title' >Top Products</h2>
        <div className="home__container-card">
            {
                products?.map(product => <CardHome key={product.id} product={product} /> )
            }
        </div>
        <WhyUs/>
    </div>
  )
}

export default Home