import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Movie Time</Link>
        </li>
        <li>
          <Link to="/search">Pesquisar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
