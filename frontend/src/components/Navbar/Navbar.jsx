import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo"/>
      <ul className='navbar-menu'>
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      
    </div>
  )
}
