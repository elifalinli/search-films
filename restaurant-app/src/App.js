import React from 'react'

import { AboutUs, FindUs, Gallery, Header, Intro, SpecialMenu } from './container';
import { NavBar } from './components';
import './App.css';

function App() {
  return (
    <div>
     <NavBar />
     <Header />
     <AboutUs />
    <SpecialMenu />
    <Intro />
    <Gallery />
    <FindUs />
    </div>
  )
}

export default App
