import React from 'react'
import './Navbar.css';
import Logo from '../static/download.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <div className='logo'>
            <img src={Logo} alt="logo" />
          </div>
          <ul className='nav_items'>
            <li className='nav_item'><a href={'/'}>Home</a></li>
            <li className='nav_item'><a href={'/about'}>About</a></li>
          </ul>
        <div className="buttons">
        <button className='button'><a href="#">Login</a></button>
        <button className='button'><a href='#'>SignUp</a></button>
        </div>
        </nav>
      </header>
    </>
  )
}
export default Navbar