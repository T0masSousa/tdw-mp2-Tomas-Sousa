import React from 'react';

//STYLES
import {
  NavbarStyled,
  NavbarItemMovie,
  NavbarItemSearch,
} from '../Styles/GlobalStyles.js';

import { MovieIcon } from '../Styles/GlobalStyles.js';
import { SearchIcon } from '../Styles/GlobalStyles.js';

//NAVBAR
const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarItemMovie to="/">
        <MovieIcon />
        Movie Time
      </NavbarItemMovie>
      <NavbarItemSearch to="/search">
        <SearchIcon />
        Pesquisar
      </NavbarItemSearch>
    </NavbarStyled>
  );
};

export default Navbar;
