import { Col, Form, Offcanvas, Row, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import storeItems from "../data/items.json";
import { PopupStoreItem } from "../components/PopupStoreItem.tsx";
import "../App.css";
import { useEffect } from "react";

type popupStoreProps = {
  isPopupStoreOpen: boolean;
};

export function PopupStore({ isPopupStoreOpen }: popupStoreProps) {
  const {
    closePopupStore,
    searchTerm,
    setSearchTerm,
    filteredItems,
    setFilteredItems,
  } = useShoppingCart();

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = storeItems.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setSearchTerm(searchTerm);
    setFilteredItems(filtered);
  }, [searchTerm]);

  return (
    <Offcanvas
      show={isPopupStoreOpen}
      onHide={closePopupStore}
      aria-controls="offcanvasWithBackdrop"
      placement="bottom"
      style={{
        position: "fixed",
        top: 68,
        bottom: 0,
        height: "100%",
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search</Offcanvas.Title>
      </Offcanvas.Header>

      <Form className="d-flex">
        <Form.Control
          placeholder="Search for items"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onBlur={() => setSearchTerm("")}
        />
      </Form>
      <Offcanvas.Body>
        <Stack gap={3}>
          <Row xs={3} md={4} lg={5}>
            {filteredItems.map((item) => (
              <Col key={item.id}>
                <PopupStoreItem {...item} />
              </Col>
            ))}
          </Row>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
