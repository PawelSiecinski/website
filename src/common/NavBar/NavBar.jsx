import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="/">Analiza Badań</Navbar.Brand>
        <Nav sticky="top" className="me-auto">
            <Nav.Link href="/pending">Oczekujące badania</Nav.Link>
            <Nav.Link href="/upload">Prześlij badanie</Nav.Link>
            <Nav.Link href="/archive">Przejrzyj badania</Nav.Link>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Zalogowany jako: <a href="/login">Kacper Zaryczny</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
