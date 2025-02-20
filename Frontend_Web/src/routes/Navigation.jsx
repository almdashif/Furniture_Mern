import React from 'react'
import { Route, Routes, } from "react-router-dom";
import Homepage from '../Modules/Homepage/Homepage.jsx';
import SinglePage from '../Modules/SingleProductPage/SinglePage.tsx';
import Layout from '../Modules/Layout/Layout.tsx';
import ShopPage from '../Modules/Shop/ShopPage.tsx';


function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
}
export default Navigation