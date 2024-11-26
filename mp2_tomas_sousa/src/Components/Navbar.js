import React from 'react';

//STYLES
import { NavbarStyled, NavbarItem } from '../Styles/GlobalStyles.js';

//ICONES
import { MovieIcon } from '../Styles/GlobalStyles.js';
import { SearchIcon } from '../Styles/GlobalStyles.js';

//NAVBAR
const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarItem to="/">
        <MovieIcon />
        Movie Time
      </NavbarItem>
      <NavbarItem to="/search">
        <SearchIcon />
        Pesquisar
      </NavbarItem>
    </NavbarStyled>
  );
};

export default Navbar;
