import React from "react";
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
