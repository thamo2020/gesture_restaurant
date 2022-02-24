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
        <Chef />
        <FindUs/>
        <Footer />
        <Gallery />
        <Intro />
        <Laurels />
        <SpecialMenu />

    </div>
  )
}

export default App