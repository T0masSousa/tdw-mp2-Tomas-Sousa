// Usa a QUERY
import { useFetchMoviesQuery } from '../reduxStore/omdbSlice.js';
import React, { useEffect, useState } from 'react';

//STYLES
import {
  ListResultsCard,
  ListResultsContainer,
  ListResultsFilter,
  ListResultsMovieImage,
  ListResultsMovieInfo,
  ListResultsMovieTitle,
  ListResultsParagraph,
  ListResultsResultsContainer,
  ListResultsFiltersContainer,
  ListResultsMovieImageContainer,
  ListResultsButtonCards,
  ListResultsFeedbackP,
  ErrorContainer,
  ErrorMessage,
  HomeTitle,
} from '../Styles/GlobalStyles.js';

//LOADER
import { DefaultLoader } from './DefaultLoader.js';

// PAGE
export default function ListResults({ filters }) {
  //VALORES A LISTAR || PEDIDO
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

  //STATES PARA ORDENAR
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

  //LOADING
  if (isLoading) {
    return <DefaultLoader />;
  }

  //MENSAGEM DE ERRO
  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>
          Erro a carregar conteúdo, por favor, tenta novamente.
        </ErrorMessage>
        <ListResultsButtonCards to="/search">Voltar</ListResultsButtonCards>
      </ErrorContainer>
    );
  }

  return (
    <ListResultsContainer>
      <HomeTitle>Resultados da Pesquisa</HomeTitle>
      <ListResultsParagraph>
        Aqui estão os resultados da tua pesquisa.
      </ListResultsParagraph>
      <ListResultsFiltersContainer>
        <ListResultsFilter>
          <label>
            <b>Ordenação</b>
          </label>
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="title-asc">Nome (A-Z)</option>
            <option value="title-desc">Nome (Z-A)</option>
            <option value="year-asc">
              Ano (Mais Antigo para Mais Recente)
            </option>
            <option value="year-desc">
              Ano (Mais Recente para Mais Antigo)
            </option>
          </select>
        </ListResultsFilter>
        <ListResultsFilter>
          <label>
            <b>Tipo</b>
          </label>
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
        </ListResultsFilter>
      </ListResultsFiltersContainer>
      {sortedMovies.length === 0 ? (
        <ListResultsFeedbackP>
          Nenhum resultado desta categoria.
        </ListResultsFeedbackP>
      ) : (
        <ListResultsResultsContainer>
          {sortedMovies.map((movie, index) => (
            <ListResultsCard key={movie.imdbID || index}>
              <ListResultsMovieImageContainer>
                <ListResultsMovieImage src={movie.Poster} alt={movie.Title} />
              </ListResultsMovieImageContainer>
              <ListResultsMovieTitle>{movie.Title}</ListResultsMovieTitle>
              <ListResultsMovieInfo>
                <b>Lançamento </b>: {movie.Year}
              </ListResultsMovieInfo>
              <ListResultsMovieInfo>
                <b>Tipo</b>:{' '}
                {movie.Type === 'movie'
                  ? 'Filme'
                  : movie.Type === 'series'
                    ? 'Série'
                    : movie.Type === 'episode'
                      ? 'Episódio'
                      : movie.Type === 'game'
                        ? 'Jogo'
                        : movie.Type}
              </ListResultsMovieInfo>
              <ListResultsButtonCards to={`/details/${movie.Title}`}>
                Detalhes
              </ListResultsButtonCards>
            </ListResultsCard>
          ))}
        </ListResultsResultsContainer>
      )}
    </ListResultsContainer>
  );
}
