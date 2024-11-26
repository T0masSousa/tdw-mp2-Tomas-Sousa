import React from 'react';
import ListResults from '../Components/ListResults.js';
import { useLocation } from 'react-router-dom';

//PÁGINA LISTAGEM RESULTADOS
export default function ResultsPage() {
  //PARA IR BUSCAR À NAVEGAÇÃO O VALOR
  const location = useLocation();

  //PEGA EM TODOS OS FILTROS, PORQUE PODE HAVER MAIS QUE O TÍTULO SÓ
  const { filters } = location.state;

  return <ListResults filters={filters} />;
}
