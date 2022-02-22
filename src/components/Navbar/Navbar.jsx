import React from 'react';
import {GiHumburgerMenu} from 'react-icons/gi';
import {MdOutlineRestuarantMenu} from 'react-icons/md'
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
      <div className='app__navbar-logo' >
      <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'> <a href="#home">Home</a> </li>
        <li className='p__opensans'> <a href="#about">about</a> </li>
        <li className='p__opensans'> <a href="#menu">menu</a> </li>
        <li className='p__opensans'> <a href="#awards">awards</a> </li>
        <li className='p__opensans'> <a href="#contact">contact</a> </li>
      </ul>

      
  </nav>
);

export default Navbar;
