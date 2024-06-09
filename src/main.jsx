import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  </BrowserRouter>
);
