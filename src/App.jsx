import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Cart from './components/Routes/Cart'
import Header from './components/shared/Header'
import { useEffect } from 'react'
import ProtectedRoutes from '../src/components/Routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App



// useEffect(() => {

//   const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users"

//   const obj = {
//     firstName: "Jose",
//     lastName: "Andres",
//     email: "pepegavilanes@gmail.com",
//     password: "pass1234",
//     phone: "1234567891",
//     role: "admin"
// }

//   axios.post(URL, obj)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))
// })
