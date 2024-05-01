<<<<<<< HEAD
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem.tsx";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import { useEffect } from "react";

export function Store() {
  const { searchTerm, setSearchTerm, filteredItems, setFilteredItems } =
    useShoppingCart();

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = storeItems.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm)
    );

    setSearchTerm(searchTerm);
    setFilteredItems(filtered);
  }, [searchTerm]);

  return (
    <>
      <h1>Store Page is Here</h1>

      <Form className="d-flex">
        <Form.Control
          placeholder="Search for items"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Form>

      <Row xs={1} md={2} lg={3}>
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem
              // item={item}
              {...item}
            />
=======
import { Col, Form, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem.tsx";

export function Store() {
  return (
    <>
      <h1 className="m-1">35mm Film Cameras</h1>

      {/* <Form className="d-flex m-3">
        <Form.Control
          placeholder="Search for items"
          type="text"
          //todo value={}
          //todo onChange={(e) => FUNCTION(e.target.value)}
        />
      </Form> */}

      <Row xs={1} md={2} lg={3}>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
>>>>>>> 21dafd14d557665c756ab625272095249305c14f
          </Col>
        ))}
      </Row>
    </>
  );
}
