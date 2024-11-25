import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';

//PAGES
import HomePage from './Pages/HomePage.js';
import SearchPage from './Pages/SearchPage.js';
import ResultDetailsPage from './Pages/ResultDetailsPage.js';

// ESTILO
import { GlobalStyles } from './Styles/GlobalStyles.js';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/film/:title" element={<ResultDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
