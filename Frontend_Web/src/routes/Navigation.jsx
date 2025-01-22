import React from 'react'
import { Route, Routes, } from "react-router-dom";
import Homepage from '../Modules/Homepage/Homepage.jsx';


function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
export default Navigation