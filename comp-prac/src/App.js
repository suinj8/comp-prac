import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
