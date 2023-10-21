import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Error from "./components/Error";
import Home from "./pages/Home/";
import Housing from "./pages/Housing";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', Helvetica, sans-serif;
  margin: 50px 100px;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/housing" element={<Housing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
