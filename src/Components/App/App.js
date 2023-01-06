import React from 'react'
import Header from '../Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductListing from '../ProductListing';
import ProductDatail from '../ProductDatail';

function App() {
  return (
    <>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDatail />} />
        </Routes >
      </React.Fragment>

    </ >
  );
}

export default App;
