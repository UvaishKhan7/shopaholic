import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDescription from './components/productDescription/ProductDescription.js';
import Products from './components/products/Products';
import './App.css'
import Navbar from './components/navbar/Navbar.js';
import Error from './components/Error/Error.js';
import CartItem from './components/cart/CartItem.js';

function App() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart([...cart, {...data, Qty:1}])
  }

  useEffect(() => {
    const getProdcuts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setData(data);
      setFilter(data);
    }
    getProdcuts();
  }, []);

  const filterProduct = (category) => {
    const updateList = data.filter((x) => x.category === category);
    setFilter(updateList);
  }

  return (
    <div className='appWrapper'>
      <Router className='approutes'>
        <Navbar filterProduct={filterProduct} setFilter={setFilter} data={data} count={cart.length}/>
        <Routes>
          <Route path='/' element={<Products filter={filter} addToCart={addToCart} />} />
          <Route path="/products/:productId" element={<ProductDescription addToCart={addToCart} />} />
          <Route path='/cart' element={<CartItem cart={cart} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
