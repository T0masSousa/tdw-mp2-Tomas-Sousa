// Usa a QUERY
import { useFetchMoviesQuery } from '../reduxStore/omdbSlice.js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

// PAGE
export default function ListResults({ filters }) {
  const {
    data: movies,
    error,
    isLoading,
  } = useFetchMoviesQuery({
    title: filters.title,
    year: filters.year,
    type: filters.type,
    plot: filters.plot,
  });

  //STATE PARA ORDERM
  const [order, setOrder] = useState('title-asc');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortedMovies, setSortedMovies] = useState([]);

  // Reordenar Filmes
  useEffect(() => {
    //QUNADO HOUVER FILMES
    if (movies && movies.Search) {
      //FILMES
      let sortedMovies = [...movies.Search];

      //CASO O USER QUEIRA ORDENAR POR TÍTULO DE ORDEM ALFABÉTICA
      if (order === 'title-asc') {
        sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
      }
      // ORDERNAR POR TÍTULO DE Z A A
      else if (order === 'title-desc') {
        sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
      }

      //ORDENAR POR ANO CRESCENTE
      if (order === 'year-asc') {
        sortedMovies.sort((a, b) => a.Year - b.Year);
      }
      // ORDERNAR DE ANO DO MAIS RECENTE PARA O MAIS ANTIGO
      else if (order === 'year-desc') {
        sortedMovies.sort((a, b) => b.Year - a.Year);
      }

      //FILTAR POR TIPO
      if (typeFilter) {
        sortedMovies = sortedMovies.filter(
          (movie) => movie.Type === typeFilter,
        );
      }

      setSortedMovies(sortedMovies);
    }
  }, [movies, order, typeFilter]); //DEPENDE DAS ESCOLHAS DO UTILIZADOR E AINDA DA NOVA PESQUISA

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies.</div>;
  }

  return (
    <>
      <div>
        <label>Ordenação</label>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="title-asc">Nome (A-Z)</option>
          <option value="title-desc">Nome (Z-A)</option>
          <option value="year-asc">Ano (Mais Antigo para Mais Recente)</option>
          <option value="year-desc">Ano (Mais Recente para Mais Antigo)</option>
        </select>
      </div>
      <div>
        <label>Filtrar por Tipo </label>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="movie">Filme</option>
          <option value="series">Série</option>
          <option value="episode">Episódio</option>
          <option value="game">Jogo</option>
        </select>
      </div>
      {sortedMovies?.map((movie, index) => (
        <div
          key={movie.imdbID || index}
          style={{ margin: '10px', display: 'flex' }}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={{ width: '150px' }}
          />
          <div>
            <h5>{movie.Title}</h5>
            <p>Release: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
            <Link to={`/film/${movie.Title}`}>Ver Detalhes</Link>
          </div>
        </div>
      ))}
    </>
  );
}
