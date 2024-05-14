import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../App.css";
import { Link } from "react-router-dom";
import { formatterCurrency } from "../currency/CurrencyFormater.ts";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  features: string[];
  rating: number;
};

export function StoreItem({
  id,
  name,
  price,
  img,
  features,
  rating,
}: StoreItemProps) {
  const {
    increaseCartQuantity,
    removeCartQuantity,
    getItemQuantity,
    openCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  function stars() {
    const ratingArr = [];

    for (let i = 0; i < Math.floor(rating); i++)
      ratingArr.push("bi bi-star-fill"); // calculates full stars
    for (let i = 0; i < (rating % 1 === 0 ? 0 : 1); i++)
      ratingArr.push("bi bi-star-half"); //calculates half-stars
    for (let i = 0; i < Math.floor(5 - rating); i++)
      ratingArr.push("bi bi-star"); // calculates empty stars

    return ratingArr.map((el) => <i className={el}></i>);
  }

  return (
    <Card className="m-3 border-secondary rounded-0">
      <Link to={`/products/${id}`}>
        <Card.Img
          variant="top"
          src={img}
          style={{ objectFit: "contain", padding: "20px" }}
        />
      </Link>
      <div>{stars()}</div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <span className="fs-3">{name}</span>
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

        <div className="mb-3">
          <span className="fs-5 m-3">{formatterCurrency(price)}</span>

          {quantity === 0 ? (
            <Button
              variant="success"
              className="w-50"
              onClick={() => increaseCartQuantity(id)} // Add to cart
            >
              Add to cart
            </Button>
          ) : (
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-success" onClick={openCart}>
                View in Cart
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
