import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const DashboardNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ height: '5vh' }} className="text-secondary-emphasis">
      <Container>
        <Navbar.Brand href="/" className="text-secondary-emphasis">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="text-secondary-emphasis">Home</Nav.Link>
          <Nav.Link href="/page-1" className="text-secondary-emphasis">Page 1</Nav.Link>
          <Nav.Link href="/page-2" className="text-secondary-emphasis">Page 2</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashboardNavbar;
