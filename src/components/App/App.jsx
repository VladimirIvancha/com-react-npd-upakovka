import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Dashboard from "../Dashboard/Dashboard";
import NoMatch from "../NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
