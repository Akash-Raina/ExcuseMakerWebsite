import { useState, useEffect } from 'react';
import Header from './components/Header';
import Axios from 'axios';
import React from 'react';
import Hero from './components/Hero';
import MainLogic from './components/MainLogic';

function App() {


  return (
    <>
      <div>
        <Header/>
        <Hero/>
        <MainLogic/>
      </div>

    </>
  )
}

export default App
