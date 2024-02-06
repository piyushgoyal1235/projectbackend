
import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



 const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    const{getTotalcartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>CRAVERS</p>
        </div>
        <ul className="nav-menu">
    <li onClick={()=>{setMenu("Home")}}><Link to='/'>Home</Link>{menu==="Home"?<h/>:<></>}</li>
    <li onClick={()=>{setMenu("Men")}}><Link to='/Men'>Men</Link>{menu==="men"?<h/>:<></>}</li>
    <li onClick={()=>{setMenu("Women")}}><Link to='/Women'>Women</Link>{menu==="Women"?<h/>:<></>} </li>
        </ul>
        <div className='nav-login-cart'>
          { localStorage.getItem('auth-token')
           ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}> Logout</button>
           :<Link to='/LoginSignup'> <button>Login</button></Link>
            }
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">
          {getTotalcartItems()}
            </div>

        </div>
    </div>
  )
}
export default Navbar;
