import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Img from './Img';
import Banner from './zilch_logo.png';

function Header() {
  return (
    <div>
      <Container>
        <Link to="/">
          <Img src={Banner} alt="Zilch - Logo" />
        </Link>
      </Container>
    </div>
  );
}

export default Header;
