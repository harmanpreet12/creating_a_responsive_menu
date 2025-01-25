import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import Plans from "./pages/Plans";
import ProgressTracker from "./pages/ProgressTracker";
import Community from "./pages/Community";
import './styles/index.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/progress" element={<ProgressTracker />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
