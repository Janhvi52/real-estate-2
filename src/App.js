
import './App.css';
import GlobalStyle from './globalStyles'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import InfoSection from './components/InfoSection';
import {InfoData} from './data/InfoData'
import {InfoDataTwo} from './data/InfoData'

function App() {

  const [isOpen , setIsOpen]=useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    <GlobalStyle/>
      <Navbar/>
      <Dropdown/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
    </>
  );
}

export default App;
