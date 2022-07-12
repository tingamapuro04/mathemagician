/*eslint-disable*/
import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import Nav from '../src/components/nav';
import About from './components/About';
import Quote from './components/Quote';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/calculator" element= {<Calculator />} />
          <Route path="/" element= {<About />} />
          <Route path="/quote" element= {<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
