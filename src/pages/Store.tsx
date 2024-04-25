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
          </Col>
        ))}
      </Row>
    </>
  );
}
