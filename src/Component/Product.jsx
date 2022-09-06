import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getproducts } from './Api'
import './Product.css'
import Slider from './Slider'


export const cartitem=[]
const Product = ({handleItems,query}) => {
const [product,setProduct]=useState([])


const getAllproduct= async()=>{

  const data=await getproducts();

if(data){
  setProduct(data)

}
}
useEffect(()=>{
  getAllproduct();

},[])


const filterSearch=()=>{

  const  searchproduct=product.filter((item)=>{
    

    return Object.values(item).join('').toLowerCase().includes(query.toLowerCase())
  })
 
  setProduct(searchproduct)
  

  
}



useEffect(()=>{


  filterSearch()

},[query])

const handelcart=(item)=>{

  
  cartitem.push(item);


}
   return (

    <>
   
   <Slider />
    <div className='product-card'>

      {
      product.map((item)=>{
        return(
          <div className='card'>
            <div className="product-img">
            <img src={item.image}/>

            </div>
            
            <div className="card-details">

              <Link to={`/product/${item.title}`}>
              <h3>{item.title.slice(0,50)}...</h3>

              </Link>
              
              
              <h4>{item.category}</h4>
              <h4>${item.price}</h4>

              <button onClick={()=>handleItems(item)}>Add To Card</button>
            </div>
          </div>
        )
      })
      }
    </div>


    </>
  )
}

export default Product