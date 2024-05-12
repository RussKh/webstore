import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../App.css";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  features: string[];
  rating: number;
};

{
  /* <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-half"></i>
  <i class="bi bi-star"></i> */
}

export function StoreItem({
  id,
  name,
  price,
  img,
  features,
  rating,
}: StoreItemProps) {
  const { increaseCartQuantity, removeCartQuantity, getItemQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(id);

  function stars() {
    let ratingArr = [];

    for (let i = 0; i < Math.floor(rating); i++)
      ratingArr.push("bi bi-star-fill"); // calculates full stars
    for (let i = 0; i < (rating % 1 === 0 ? 0 : 1); i++)
      ratingArr.push("bi bi-star-half"); //calculates half-stars
    for (let i = 0; i < Math.floor(5 - rating); i++)
      ratingArr.push("bi bi-star"); // calculates empty stars

    return ratingArr.map((el) => <i className={el}></i>);
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={img}
        style={{ objectFit: "contain", padding: "20px" }}
        height="250px"
        width="250px"
      />
      <div>{stars()}</div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between mb-3">
          <span className="fs-3">{name}</span>
          <span className="text-muted fs-5">{price}</span>
        </Card.Title>
        <hr />
        <Card.Subtitle className="text-muted">
          <h4>Key features:</h4>
          <ul>
            {features.map((feature: string) => (
              <li>{feature}</li>
            ))}
          </ul>
        </Card.Subtitle>

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
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-secondary" className="non-reactive">
                Added to cart
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => removeCartQuantity(id)}
              >
                Remove
              </Button>
            </ButtonGroup>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
