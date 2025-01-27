import React from 'react'
import { Route, Routes, } from "react-router-dom";
import Homepage from '../Modules/Homepage/Homepage.jsx';
import SinglePage from '../Modules/SingleProductPage/SinglePage.tsx';


function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<SinglePage />} />
    </Routes>
  );
}
export default Navigation