import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App'
import store from './redux/store';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode >
  </BrowserRouter>

);
