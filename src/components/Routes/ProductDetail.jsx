import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import ProductDescription from '../ProductDetail/ProductDescription'
import SimilarProducts from '../ProductDetail/SimilarProducts'

const ProductDetail = () => {

  const { id } = useParams()

  const [productInfo, setproductInfo] = useState()
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
    axios.get(URL)
    .then(res => setproductInfo(res.data.data.product))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="product-description__main-container" >
      <ProductDescription productInfo={productInfo} />
      <SimilarProducts
        productInfo={productInfo}
      />
    </div>
  )
}

export default ProductDetail