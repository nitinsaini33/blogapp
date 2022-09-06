import React from 'react'
import './Single.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getproducts } from './Api';
import { cartitem } from './Product';


const Single = () => {
  
  
   
 
  

const [shopping,setShopping]=useState([]);
    const {title}=useParams();
  
    console.log('param',title)


const getSingleproduct=async()=>{
    const product=await getproducts();
    const fillarry=product.filter((item)=>item.title===title)
   
console.log('product',product)
setShopping(fillarry[0]);


}

console.log(title);
useEffect(()=>{

    getSingleproduct()
    

},[])

console.log('single dTA',shopping);





 

  return (
    <>
    <div className='single-cart'>
      <div  className='left-side'>
      <div className='single-img'>
      <img src={shopping.image} alt=''/>
      
       
      </div>
      <div className='single-title'>
<h1>{shopping.category}</h1>
<h1>{shopping.title}</h1>
<h2>${shopping.price}</h2>
<h4>{shopping.description}</h4>
<div className='cart-btn'>
<button className='addto-cart'>ADD TO CART</button>
<button className='buy-cart'>BUY NOW</button>
</div>
</div>
</div>



    </div>
    </>
  )
}

export default Single