import React from "react";
import "./App.css";
import NavBar from "./components/NAV/NavBar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
