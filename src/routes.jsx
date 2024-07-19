/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Merchant from "./pages/Merchant";
import Login from "./pages/Login";
import Docs from "./pages/Docs";
import Collections from "./pages/Collections";
import PopularProducts from "./pages/PopularProducts";
import StoreCrawler from "./pages/StoreCrawler";
import ProductDetails from "./pages/productdetails";

const AppRoutes = () => (
  <Routes>
    <Route
      path='/'
      element={<Home />}
    />
    <Route
      path='/about'
      element={<About />}
    />
    <Route
      path='/contact'
      element={<Contact />}
    />
    <Route
      path='/privacy'
      element={<Privacy />}
    />
    <Route
      path='/terms'
      element={<Terms />}
    />
    <Route
      path='/merchant'
      element={<Merchant />}
    />
    <Route
      path='/login'
      element={<Login />}
    />
    <Route
      path='/docs'
      element={<Docs />}
    />
    <Route
      path='/collections'
      element={<Collections />}
    />
    <Route
      path='/popular-products'
      element={<PopularProducts />}
    />
    <Route
      path='/productdetails'
      element={<ProductDetails />}
    />

    <Route
      path='/store-crawler'
      element={<StoreCrawler />}
    />
  </Routes>
);

export default AppRoutes;
