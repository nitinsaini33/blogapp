import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Api from './Component/Api';
import Header from './Component/Header';
import Product from './Component/Product';
import Singnup from './Component/Singnup';
import Cart from './Component/Cart';
import Single from './Component/Single';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("")

  const handleItems = (product) => {



    setCartItems([...cartItems, product])

  }

  const handlerRemove = (id) => {


    const newCartItems = cartItems.filter((item) => item.id !== id)

    if (newCartItems) {
      setCartItems(newCartItems)
    }


  }

  let total = 0;

  cartItems?.forEach((item) => {
    total = total + Math.floor(item.price)
  })



  const handleChnage = (e) => {

    setQuery(e.target.value)

  }



  return (
    <div className='App-co'>
      <Router>
        <Header cartItems={cartItems} handleChnage={handleChnage} />


        <Routes>
          <Route path='/' element={<Product handleItems={handleItems} query={query} />} />
          <Route path='/singnup' element={<Singnup />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} handlerRemove={handlerRemove} total={total} />} />
          <Route path='/product/:title' element={<Single />} />



        </Routes>
      </Router>

    </div>
  )
}

export default App