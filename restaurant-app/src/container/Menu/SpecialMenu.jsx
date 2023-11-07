import React from 'react';

import './SpecialMenu.css';
import { SubHeading} from '../../components';
import menu from '../../assets/menu.png'


const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your taste"/>
      <h1 className='headtext__cormorant'>Our Menu</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_image'>
        <img src={menu} alt="menu_img"/>
      </div>
    

    </div>
  </div>
);

export default SpecialMenu;