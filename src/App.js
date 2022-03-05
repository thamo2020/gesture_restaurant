import React from 'react';
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container'
import {Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <FindUs/>
        <Footer />
        <Gallery />
        <Intro />
        <Laurels />
        

    </div>
  )
}

export default App