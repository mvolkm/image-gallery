import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

/*Styles */
const navbarStyle ={
    backgroundColor: '#0B173B'
}
const Header = ({title}) => {
    return(
        <Navbar style={navbarStyle} bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;