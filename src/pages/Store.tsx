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
      {/* 
      <Form className="d-flex">
        <Form.Control
          placeholder="Search for items"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Form> */}

      <Row xs={1} md={2} lg={3}>
        {filteredItems.map((item) => (
          <Col key={item.id}>
            <StoreItem
              // item={item}
              {...item}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
