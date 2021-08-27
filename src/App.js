import React from 'react';
import Top from './Top';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import HowTo from './HowTo';
import Faqs from './Faqs';
import Typicode from './Typicode';
import Footer from './Footer';

function App() {
  return (
    <>
      <Top />
      <About />
      <HowTo />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;