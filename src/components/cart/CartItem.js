import React, { useEffect, useState } from 'react';
import './CartItem.css'

function CartItem({ cart }) {

  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart)
  }, [cart]);

  return (
    <div className='container text-center overflow-auto cartItemWrapper'>
      <h3 className='mb-4'>Your Cart</h3>
      {
        CART?.map((product, productIndex) => {
          return (
            <div key={product.id} className='mt-2'>
              <div className='d-flex rounded text-bg-light py-2 px-3 align-items-center justify-content-between flex-row'>
                <img src={product.image} alt="" width={40} />
                <h6 className='ttl col-mb-10 text-start'>{product.title}</h6>
                <div className="qty text-bg-light d-flex align-items-center text-center px-1 py-1">
                  <button className='btn-minus' onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return productIndex === index ? { ...item, Qty: product.Qty > 0 ? product.Qty - 1 : 0 } : item;
                    });
                    setCART(_CART);
                  }
                  }>-</button>
                  <span> &nbsp; Qty: {product.Qty} &nbsp;</span>
                  <button className='btn-plus' onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return productIndex === index ? { ...item, Qty: product.Qty + 1 } : item;
                    });
                    setCART(_CART);
                  }}>+</button>
                </div>
                <span className='col-mb-10 '>Price : $ {product.price}/-</span>
                <span className='col-mb-10 '>Total : $ {(product.price * product.Qty).toFixed(2)}/-</span>
              </div>
              <hr />
            </div>
          )
        })
      }
      <h3 className='mt-3 text-success'>Final Pyable Amount = ${
        CART?.map(item => item.price * item.Qty).reduce((total, value) => total + value, 0).toFixed(2)}</h3>
    </div>
  )
}

export default CartItem;
