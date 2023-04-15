import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./layouts";
import About from "./modules/about";
import Home from "./modules/home";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
