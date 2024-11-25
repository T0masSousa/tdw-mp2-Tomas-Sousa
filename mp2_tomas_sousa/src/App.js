import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import { SpeedInsights } from '@vercel/speed-insights/react';

//PAGES
import HomePage from './Pages/HomePage.js';
import SearchPage from './Pages/SearchPage.js';
import ResultDetailsPage from './Pages/ResultDetailsPage.js';

function App() {
  return (
    <SpeedInsights>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/film/:title" element={<ResultDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </SpeedInsights>
  );
}

export default App;
