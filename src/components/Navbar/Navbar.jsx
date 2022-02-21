import React from 'react';
import {GiHumburgerMenu} from 'react-icons/gi';
import {MdOutlineRestuarantMenu} from 'react-icons/md'
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav class= "app__navbar">
    <div className='app__navbar-logo' >
      <img src={images.gericht} alt="app-logo" />
      </div>
  </nav>
);

export default Navbar;
