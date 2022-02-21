import React from 'react';
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container'
import {Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div>
        <Navbar />
        <AboutUs />
        <Chef />
        <FindUs/>
        <Footer />
        <Gallery />
        <Header />
        <Intro />
        <Laurels />
        <SpecialMenu />

    </div>
  )
}

export default App