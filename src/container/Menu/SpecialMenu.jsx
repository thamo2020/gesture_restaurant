import React from 'react';
import {images, data } from '../../constants';
import {SubHeading, MenuItem} from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__spetialMenu-title">
      <SubHeading title='Menu That Fits Your Paalatte'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
  </div>
);

export default SpecialMenu;
