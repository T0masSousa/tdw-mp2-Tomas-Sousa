//PÁGINA DO LOADER COM CSS APLICADO
import React from 'react';
import { HollowDotsSpinner } from 'react-epic-spinners';

//STYLE
import { LoaderContainer } from '../Styles/GlobalStyles.js';

export const DefaultLoader = () => {
  return (
    <LoaderContainer>
      <HollowDotsSpinner color="#0056b3" size={15} animationDelay={3} />
    </LoaderContainer>
  );
};
