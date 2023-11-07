import React from 'react';
import divider from '../../assets/divider.png'


const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
 
    <img src={divider} alt="doner-kebab" className='spoon__img' style={{transform: 'rotate(-0.25turn)'}}/>
  </div>
);

export default SubHeading;