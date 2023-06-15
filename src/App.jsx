import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import History from "./pages/History";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/imageLoader" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
