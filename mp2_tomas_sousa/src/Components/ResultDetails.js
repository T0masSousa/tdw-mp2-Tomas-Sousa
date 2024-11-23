import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useFetchMovieDetailsQuery } from '../reduxStore/omdbSlice.js';
import { useFetchTrailerQuery } from '../reduxStore/youtubeDataSlice.js';

// DETALHES
const ResultDetails = () => {
  //TÍTULO
  const { title } = useParams();

  console.log(title);

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
  if (movieLoading || trailerLoading) return <div>Loading...</div>;

  //ERRO
  if (movieError) return <div>Error loading movie details.</div>;

  //ERRO YT
  if (trailerError) return <div>Error loading trailer.</div>;

  const trailer = trailerData?.items[0];

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <p>{movieDetails.Plot}</p>
      <p>Ano: {movieDetails.Year}</p>
      <p>Género: {movieDetails.Genre}</p>
      <p>Diretor: {movieDetails.Director}</p>
      <p>Atores: {movieDetails.Actors}</p>
      <p>Avaliação IMDB: {movieDetails.imdbRating}</p>
      <img
        src={movieDetails.Poster}
        alt={movieDetails.Title}
        style={{ width: '150px' }}
      />
      {trailer && (
        <div>
          <h2>Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ResultDetails;
