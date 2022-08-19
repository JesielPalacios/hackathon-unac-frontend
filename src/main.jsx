import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/revisiones' element={<Reviews />} />
      <Route path='/about_us' element={<About />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
