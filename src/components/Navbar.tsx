import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../public/images/logo.png";

export function Navbar() {
  const { cartQuantity, openCart, openPopupStore } = useShoppingCart();
  return (
    <NavbarBS className="sticky-top navbar-expand-lg bg-light-subtle gradient-navbar shadow">
      <Container>
        <NavbarBS.Brand to="/" as={NavLink}>
          <img
            src={logo}
            height="50"
            // className="d-inline-block align-top"
            alt="logo"
          />
        </NavbarBS.Brand>
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
        </Nav>
        <i
          className="bi bi-search"
          style={{ fontSize: "1.2rem" }}
          onClick={openPopupStore}
        ></i>
        {/* <div className="cart-icon ">
          <i
            className="bi bi-cart m-2"
            style={{ fontSize: "1.5rem" }}
            onClick={openCart}
          />

          {cartQuantity > 0 && (
            <div className="cart-item-count badge badge-pill badge-danger">
              {cartQuantity}
            </div>
          )}
        </div> */}

        <i
          className="bi bi-cart m-2"
          style={{ fontSize: "1.5rem" }}
          onClick={openCart}
        ></i>
        <Button
          className=".cart-item-count {
"
          variant="outline-none"
        >
          {cartQuantity || ""}
        </Button>
      </Container>
    </NavbarBS>
  );
}
<use href="#BhIconColored"></use>;
