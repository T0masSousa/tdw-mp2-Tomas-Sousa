import React from 'react';
import { useParams } from 'react-router';
import { useFetchMovieDetailsQuery } from '../reduxStore/omdbSlice.js';
import { useFetchTrailerQuery } from '../reduxStore/youtubeDataSlice.js';

//ESTRELAS
import StarsRating from './StarsRating.js';

//ESTILOS
import {
  DetailsCardContainer,
  DetailsImageContainer,
  DetailsContainer,
  DetailsMovieImage,
  DetailsMovieInfo,
  DetailsMovieTitle,
  DetailsTrailerContainer,
  DetailsTrailerTitle,
  ErrorContainer,
  ErrorMessage,
  ListResultsButtonCards,
} from '../Styles/GlobalStyles.js';

//LOADER
import { DefaultLoader } from './DefaultLoader.js';

// DETALHES
const ResultDetails = () => {
  //TÍTULO
  const { title } = useParams();

  //INFO DA OMDB
  const {
    data: movieDetails,
    error: movieError,
    isLoading: movieLoading,
  } = useFetchMovieDetailsQuery(title);

  // INFO DO YOUTUBE
  const {
    data: trailerData,
    error: trailerError,
    isLoading: trailerLoading,
  } = useFetchTrailerQuery(title);

  // CARREGAR
  if (movieLoading || trailerLoading) {
    return <DefaultLoader />;
  }

  //SE NÃO HOUVER TRAILER OU NÃO HOUVER DETALHES OMBD
  if (trailerError || movieError) {
    return (
      <ErrorContainer>
        <ErrorMessage>
          Erro a carregar conteúdo, por favor, tenta novamente.
        </ErrorMessage>
        <ListResultsButtonCards to="/search">Voltar</ListResultsButtonCards>
      </ErrorContainer>
    );
  }

  //DADOS RECEBIDOS YOUTUBE
  const trailer = trailerData?.items[0];

  return (
    <DetailsCardContainer>
      <DetailsImageContainer>
        <DetailsMovieImage src={movieDetails.Poster} alt={movieDetails.Title} />
      </DetailsImageContainer>
      <DetailsContainer>
        <DetailsMovieTitle>{movieDetails.Title}</DetailsMovieTitle>
        <DetailsMovieInfo>{movieDetails.Plot}</DetailsMovieInfo>
        <DetailsMovieInfo>
          <b>Ano</b>: {movieDetails.Year}
        </DetailsMovieInfo>
        <DetailsMovieInfo>
          <b>Género</b>: {movieDetails.Genre}
        </DetailsMovieInfo>
        <DetailsMovieInfo>
          <b>Diretor</b>: {movieDetails.Director}
        </DetailsMovieInfo>
        <DetailsMovieInfo>
          <b>Atores</b>: {movieDetails.Actors}
        </DetailsMovieInfo>
        <DetailsMovieInfo>
          <b>Avaliação IMDB</b>: {movieDetails.imdbRating}
          <StarsRating rating={movieDetails.imdbRating} />
        </DetailsMovieInfo>
        {trailer && (
          <DetailsTrailerContainer>
            <DetailsTrailerTitle>Trailer</DetailsTrailerTitle>
            <iframe
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${trailer.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </DetailsTrailerContainer>
        )}
      </DetailsContainer>
    </DetailsCardContainer>
  );
};

export default ResultDetails;
