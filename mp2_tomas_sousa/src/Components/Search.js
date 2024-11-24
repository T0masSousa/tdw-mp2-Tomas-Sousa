import React, { useState } from 'react';
import FiltersRequest from './FIltersRequest.js';
import ListResults from './ListResults.js';

const Search = () => {
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
};

export default Search;
