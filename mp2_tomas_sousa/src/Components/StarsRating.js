import React from 'react';
import { DetailsStars } from '../Styles/GlobalStyles.js';

const StarsRating = ({ rating }) => {
  //VALOR TOTAL DE ESTRELAS POSSÍVEL
  const totalStars = 10;

  //ARREDONDA PARA O PRÓXIMO INTEIRO
  const filledStars = Math.round(rating);

  //CRIA ARRAR COM ESTRELAS E PARA CADA NÚMERO CHAMA UMA ESTRELA QUE PODE VIR FILLED OU NÃO
  return (
    <>
      {[...Array(totalStars)].map((star, index) => (
        <DetailsStars key={index} filled={index < filledStars} />
      ))}
    </>
  );
};

export default StarsRating;
