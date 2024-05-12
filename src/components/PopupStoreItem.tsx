import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../App.css";
import { formatterCurrency } from "../currency/CurrencyFormater.ts";

type PopupStoreProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};
// function rating() {
//   let rating = 3.5;

//   let whole = Math.floor(rating) // whole filled (3)
//   let empty =  Math.floor(5 - rating) // empty
//   let half = Math.floor(rating) === rating ? 1 : 0
// }

{
  /* <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-half"></i>
  <i class="bi bi-star"></i> */
}

export function PopupStoreItem({ id, name, price, img }: PopupStoreProps) {
  const { increaseCartQuantity, removeCartQuantity, getItemQuantity } =
    useShoppingCart();

  //   const quantity = getItemQuantity(id);

  const shortName = name.split(" ").slice(0, 2).join(" ");

  return (
    <Card className="d-flex">
      <Card.Img
        variant="top"
        src={img}
        style={{ objectFit: "contain" }}
        width="250px"
      />
      <br />
      <Card.Body className="text-center">
        <Card.Title>{shortName}</Card.Title>
       
        <div className="text-muted fs-5">{formatterCurrency(price)}</div>
        {/* <div className="mb-1">
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
        </div> */}
      </Card.Body>
    </Card>
  );
}
