/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FeatureContextProvider from "./components/Context/FeatureContext";
import { ProductDataProvider } from "./components/Context/ProductCardContext";
import { CartProvider } from "./components/Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductDataProvider>
        <CartProvider>
          <FeatureContextProvider>
            <App />
          </FeatureContextProvider>
        </CartProvider>
      </ProductDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
