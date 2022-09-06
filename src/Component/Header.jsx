
import './Header.css'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {BiSearchAlt2} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cartitem } from './Product';
const Header = ({cartItems,handleChnage}) => {

const [cart,setCart]=useState("")
  



 


  return (
    <header className='header'>
    <div className='header-main'>
      <h1>
       Electrobic Shop
      </h1>
      <div className='input-icon'>
      <input type='text'  placeholder='Search for product and more' onChange={handleChnage} />
       <span><BiSearchAlt2/></span>
      </div>
      <div className='header-nav'>
      <ul>
       
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Singnup'>Singnup</Link>
        </li>
        <div className='icon-btn'>
        <li className='icon'>
          <Link to='/Cart'><BsFillCartPlusFill/></Link>
          <span>{cartItems?.length>0?cartItems?.length:"0"}</span>
        
        </li>
       
        </div>
      </ul>
      </div>
    </div>
    </header>
  )
}

export default Header;