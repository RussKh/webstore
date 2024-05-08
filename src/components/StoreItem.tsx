import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export function StoreItem({ id, name, price, img }: StoreItemProps) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartQuantity,
    getItemQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={img}
        style={{ objectFit: "contain", padding: "20px" }}
        height="250px"
        width="125px"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between mb-3">
          <span className="fs-3">{name}</span>
          <span className="text-muted fs-5">{price}</span>
        </Card.Title>
        <div className="mb-1">
          {quantity === 0 ? (
            <Button
              variant="outline-secondary"
              className="w-100"
              onClick={() => increaseCartQuantity(id)} // Add to cart
            >
              Add to cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div
                className="d-flex justify-content-center"
                style={{ gap: "0.5em" }}
              >
                <Button
                  variant="outline-secondary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  {" "}
                  -{" "}
                </Button>

                <div>
                  <span className="fs-4">{quantity}</span>
                </div>

                <Button
                  variant="outline-secondary"
                  onClick={() => increaseCartQuantity(id)}
                >
                  {" "}
                  +{" "}
                </Button>
              </div>

              <Button
                variant="outline-danger"
                onClick={() => removeCartQuantity(id)}
              >
                REMOVE
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
