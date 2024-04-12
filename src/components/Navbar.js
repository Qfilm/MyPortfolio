
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react'

function Header() {
  const expand = false;

  return (
    <Navbar expand={expand} className="custom-navbar">
      <Container fluid>
        <Row className="w-100">
          <Col xs={5} md={2}>
            <Navbar.Brand href="/"><img
              src="/img/logo.svg"
              width="130"
              height="130"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          </Col>
          <Col xs={4} md={8} className="text-center">
            <a href='/'><h1 className="navbar-title">Quality On Screen</h1></a>
          </Col>
          <Col xs={5} md={2} className="text-end">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Col>
        </Row>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header className='hamburger' closeButton>

          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav  className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="custom-nav-link" href="/">Home</Nav.Link>
              <Nav.Link className="custom-nav-link" href="/about">About</Nav.Link>
              <NavDropdown className="custom-nav-link"
                title="Critical Writing"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item className="dropdown-items" href="#action3">Close-textual Analyses</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-items" href="/blog">
                  Personalized Analyses
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-items" href="#action5">
                  Essay-Styled Analyses
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-items" href="#action6">
                  Article-Styled Analyses
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="custom-nav-link" href="/photos">Photography</Nav.Link>
              <Nav.Link  className="custom-nav-link" href="/contact">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;