import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';

//PAGES
import HomePage from './Pages/HomePage.js';
import SearchPage from './Pages/SearchPage.js';
import ResultDetailsPage from './Pages/ResultDetailsPage.js';
import ResultsPage from './Pages/ResultsPage.js';

// ESTILO GLOBAL
import { GlobalStyles } from './Styles/GlobalStyles.js';

//ROUTING
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details/:title" element={<ResultDetailsPage />} />
        <Route path="/results" element={<ResultsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
