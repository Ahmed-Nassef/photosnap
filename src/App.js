import React from 'react'
import './App.css';
import LandingPage from './components/Pages/LandingPage';
import FeaturesPage from './components/Pages/FeaturesPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/features' element={<FeaturesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;