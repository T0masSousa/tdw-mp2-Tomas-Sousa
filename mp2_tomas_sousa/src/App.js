import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

// CHAMAR O FORM
import FiltersRequest from './Components/FIltersRequest.js';
//CHAMA O LIST
import ListResults from './Components/ListResults.js';
//DETALHES
import ResultDetails from './Components/ResultDetails.js';

function App() {
  // FILTERS
  const [filters, setFilters] = useState({
    title: '',
    year: '',
    type: '',
    plot: '',
  });

  return (
    <Router>
      <div>
        <h1>MP2 - Tomas Sousa </h1>
        <FiltersRequest onFilterChange={setFilters} />
        <Routes>
          {filters.title !== '' && (
            <Route path="/" element={<ListResults filters={filters} />} />
          )}
          <Route path="/film/:title" element={<ResultDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
