//PÁGINA DO LOADER COM CSS APLICADO
import React from 'react';
import { HollowDotsSpinner } from 'react-epic-spinners';

//STYLE
import { LoaderContainer, LoaderH1 } from '../Styles/GlobalStyles.js';

export const DefaultLoader = () => {
  return (
    <LoaderContainer>
      <LoaderH1>A Carregar</LoaderH1>
      <HollowDotsSpinner color="#0056b3" size={15} animationDelay={3} />
    </LoaderContainer>
  );
};
