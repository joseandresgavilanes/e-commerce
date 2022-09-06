import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'


function App() {

  return (
    <div className="App">
      <Header/>
    <Routes>

        <Route path="/" element={<Home/>} />

        <Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/purchases" element={<Purchases/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Route>
    </Routes>

    </div>
  )
}

export default App
