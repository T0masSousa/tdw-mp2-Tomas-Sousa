import React, { useState } from 'react';

// CHAMAR O FORM
import FiltersRequest from './Components/FIltersRequest.js';
//CHAMA O LIST
import ListResults from './Components/ListResults.js';

function App() {
  // FILTERS
  const [filters, setFilters] = useState({
    title: '',
    year: '',
    type: '',
    plot: '',
  });

  return (
    <div>
      <FiltersRequest onFilterChange={setFilters} />
      {filters.title !== '' && <ListResults filters={filters} />}
    </div>
  );
}

export default App;
