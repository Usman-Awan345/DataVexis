import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import 'swiper/css';
import 'swiper/css/bundle';
import Home from './page/Home';
import Postproject from './page/Postproject';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/postproject/:id' element={<Postproject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
