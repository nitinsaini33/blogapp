import React from 'react'
import { cartitem } from './Product'
import { useState } from 'react'
import {BsShieldFillCheck} from 'react-icons/bs'
import  {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'
import './Cart.css'
const Cart = ({ cartItems,handlerRemove,total }) => {
  console.log('cart', cartItems);


  const [num, setNum] = useState(1);
  const incNum = () => {
    setNum(num + 1);
    
  };
  const decNum = () => {

    setNum(num - 1);
  };






  return (


    <div className='container'>

      <div className="cart-wraper">
        {
          cartItems?.length>0 ?
          cartItems?.map((item) => {
            return (
              <>
                <div className='perent'>
                  <div className="cart">
                    <div className='cart-img'>
                      <img src={item.image}></img>
                      
                     
                      <div className='button-set'>
                        <button className='add-cart'>ADD TO CART</button>
                        <button className='buy-now' onClick={()=>handlerRemove(item.id)}>REMOVE</button>
                      </div>
                    </div>
                    <div className='cart-title'>
                      <h2>{item?.category}</h2>

                      <h3>{item.title}</h3>
                      <h5>Price ${item.price*num}</h5>
                      <div className='button-group'>
                        <span className='icon' onClick={incNum} ><AiOutlinePlusCircle/></span>
                      <span>{num}</span>
                      <span className='icon' onClick={decNum}><AiFillMinusCircle/></span>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            )
          }):<h1>No item added to cart</h1>


        }







      </div>
      {
        cartItems?.length>0 && 
      


      <div className='righte-side'>
        <div className='price-details'>

          <h1>Price Details</h1>
          <div className='item'>
            <span>price({` item ${cartItems?.length}`})</span>
            <span>${total}</span>
          </div>
          
          
          <div className='item'>
            <span>Delivery Charge</span>
            <span className='item-thnk'>FREE</span>
             </div>
             <div className='item'>
            <span>Total Amount</span>
            <span>${total}</span>
             </div>
             <div className='item'>
            <span className='item-thnk'>Thanks For Order</span>
            
             </div>
             
        </div>

        <div className='end'>
              <p>
                 <BsShieldFillCheck/> Safe and Secure Payments.Easy returns.100% Authentic products
              </p>
             </div>
      </div>
}



    </div>
  )
}

export default Cart