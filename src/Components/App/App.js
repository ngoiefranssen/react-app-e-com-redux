import React from 'react'
import Header from '../Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductListing from '../ProductListing';
import ProductDatail from '../ProductDatail';

function App() {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDatail />} />
          {/* < Route path='' element={</>} /> */}
          {/* // < Route path='' element={</>} /> */}
        </Routes >
      </React.Fragment>

    </div >
  );
}

export default App;
