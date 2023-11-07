import React from 'react';
import divider from '../../assets/divider.png'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutuse app__bg flex__center section__padding' id="about">
      <div className="app__aboutus-content flex__center">
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={divider} alt="about_doner_kebab" style={{transform: 'rotate(-0.25turn)'}} className='spoon__img'/>
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore M</p>
      
        </div>

        <br/>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={divider} alt="about_doner_kebab" style={{transform: 'rotate(-0.25turn)'}} className='spoon__img'/>
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore M</p>
          
        </div>

      </div>
  </div>
);

export default AboutUs;