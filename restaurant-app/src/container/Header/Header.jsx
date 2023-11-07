import React from 'react';

import './Header.css';
import welcome from '../../assets/welcome.png'

import { SubHeading } from '../../components';

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (  
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the flavour!"/>
      <h1 className='app__header-h1'>The key to get your craving</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button type="button" className="custom__button" onClick={scrollToMenu}>Explore Menu</button>

    </div>
    <div className='app__wrapper_img'>
    <img src={welcome} alt="header img" />
</div>
  </div>
  )

  };

export default Header;