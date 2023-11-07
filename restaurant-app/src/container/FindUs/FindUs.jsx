import React from 'react';
import { SubHeading } from '../../components';
import findus from '../../assets/findus.jpg'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
<div className='app__wrapper-content'>
  <p className='p__opensans'>Wickes Car Park, Churchill Way W, Basingstoke RG21 6AA</p>
  <p className='p__opensans'>Phone: 07833 900837</p>
  <p className='p__opensans'>Service options: Drive-through  · No dine-in  · No delivery </p>
  <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
  <p className='p__opensans'>Monday-Thurs: 7 am-11.30 pm </p>
  <p className='p__opensans'>Friday-Saturday: 7 am-12.30 pm</p>
  <p className='p__opensans'>Sunday: 10 am-11.30 pm</p>
</div>
<button className='custom__button' style={{marginTop: '2rem'}}><a href="https://www.google.com/maps/place/Basingstoke+Kebab+House+-+Wickes/@51.2650419,-1.1086049,17z/data=!3m1!4b1!4m6!3m5!1s0x487421a70f1e04c3:0xc9733cea885f647!8m2!3d51.2650419!4d-1.10603!16s%2Fg%2F11rjtz0zs4?entry=ttu" target="_blank" rel="noopener noreferrer" >Visit Us</a></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={findus} alt='find us doner kebab'/>
    </div>
  </div>
);

export default FindUs;