import React from 'react'
import './App.css';
import LandingPage from './components/Pages/LandingPage';
import FeaturesPage from './components/Pages/FeaturesPage';
import StoriesPage from './components/Pages/StoriesPage';
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
          <Route path='/stories' element={<StoriesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;