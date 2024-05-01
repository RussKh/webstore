<<<<<<< HEAD
import {Container, Nav, Navbar as NavbarBS} from 'react-bootstrap';import {NavLink} from "react-router-dom";export function Navbar() {    return(        <NavbarBS className='sticky-top navbar-expand-lg bg-light-subtle'>     <Container>         <Nav className="me-auto">             <Nav.Link to="/" as={NavLink}>Home</Nav.Link>             <Nav.Link to="/contacts" as={NavLink}>Contacts</Nav.Link>             <Nav.Link to="/about" as={NavLink}>About</Nav.Link>             <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>             {/*<Nav.Link href="#contacts">Contacts</Nav.Link>*/}         </Nav>     </Container>        </NavbarBS>    )}
=======
import { Container, Form, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../custom.css";

export function Navbar() {
  return (
    <NavbarBS sticky="top" className="navbar navbar-expand-lg gradient-navbar">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/contacts" as={NavLink}>
            Contacts
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          {/*<Nav.Link href="#contacts">Contacts</Nav.Link>*/}
        </Nav>

        <Form>
          <Form.Control
            placeholder="Search for items"
            type="text"
            //todo value={}
            //todo onChange={(e) => FUNCTION(e.target.value)}
          />
        </Form>
      </Container>
    </NavbarBS>
  );
}
>>>>>>> 21dafd14d557665c756ab625272095249305c14f
