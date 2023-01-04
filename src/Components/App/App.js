import Header from '../Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from '../ProductListing';
import ProductDatail from '../ProductDatail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Header />
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDatail />} />
          {/* < Route path='' element={</>} /> */}
          {/* // < Route path='' element={</>} /> */}
        </Routes >
      </Router>
    </div >
  );
}

export default App;
