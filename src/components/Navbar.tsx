import {
  Button,
  Container,
  Form,
  Nav,
  Navbar as NavbarBS,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { cartQuantity, openCart, searchTerm, setSearchTerm } =
    useShoppingCart();
  return (
    <NavbarBS className="sticky-top navbar-expand-lg bg-light-subtle">
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

          <Form className="d-flex">
            <Form.Control
              placeholder="Search for items"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Form>

          {/*<Nav.Link href="#contacts">Contacts</Nav.Link>*/}
        </Nav>

        <i
          className="bi bi-cart m-2"
          style={{ fontSize: "1.5rem" }}
          onClick={openCart}
        ></i>
        <Button className="badge text-bg-secondary" variant="outline-secondary">
          {cartQuantity || ""}
        </Button>
      </Container>
    </NavbarBS>
  );
}
