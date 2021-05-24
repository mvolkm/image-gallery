import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#3e3e3e',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Logo alt={title} style={{ maxWidth: '14rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
