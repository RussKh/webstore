import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import storeItems from "../data/items.json";
import Stack from "react-bootstrap/Stack";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { formatterCurrency } from "../currency/CurrencyFormater.ts";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  // явная вертикальная передача пропса, от родительского к дочернему

  const { removeCartQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart(); // вертикальная передача пропс из контекста (провайдер), где уже все типизированно

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <img src={item.img} style={{ width: "100px" }} />
          {item.name.split(" ").slice(0, 2).join(" ")}
          {formatterCurrency(item.price)}
        </Col>

        <Col>
          {quantity > 0 && (
            <div
              className="btn-group-vertical btn-group-sm"
              role="group"
              aria-label="Vertical button group"
            >
              <ButtonGroup size="sm" className="m-1" vertical>
                <Button
                  variant="outline-secondary"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
                <Button variant="outline-secondary" className="non-reactive">
                  {quantity}
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
              </ButtonGroup>
            </div>
          )}
        </Col>
        <Col>{formatterCurrency(item.price * quantity)}</Col>
        <Col>
          <Button
            variant="outline-danger"
            onClick={() => removeCartQuantity(item.id)}
          >
            &times;
          </Button>
        </Col>
      </Row>
    </Container>

    // <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
    //   <div className="me-auto">
    //     <div>
    //       <img src={item.img} style={{ width: "100px" }} />

    //       <div>{item.name.split(" ").slice(0, 2).join(" ")}</div>
    //     </div>

    //     <span className="text-muted mr-2" style={{ fontSize: ".9rem" }}>
    //       {formatterCurrency(item.price)} &times;
    //     </span>
    //     {quantity > 0 && (
    //       <div
    //         className="btn-group-vertical btn-group-sm"
    //         role="group"
    //         aria-label="Vertical button group"
    //       >
    //         <ButtonGroup size="sm" className="m-1" vertical>
    //           <Button
    //             variant="outline-secondary"
    //             onClick={() => increaseCartQuantity(id)}
    //           >
    //             +
    //           </Button>
    //           <Button variant="outline-secondary" className="non-reactive">
    //             {quantity}
    //           </Button>
    //           <Button
    //             variant="outline-secondary"
    //             onClick={() => decreaseCartQuantity(id)}
    //           >
    //             -
    //           </Button>
    //         </ButtonGroup>
    //       </div>
    //     )}
    //   </div>

    //   <div>{formatterCurrency(item.price * quantity)}</div>
    //   <Button
    //     variant="outline-danger"
    //     onClick={() => removeCartQuantity(item.id)}
    //   >
    //     &times;
    //   </Button>
    // </Stack>
  );
}
