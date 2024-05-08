import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import storeItems from "../data/items.json";
import Stack from "react-bootstrap/Stack";
import { Button } from "react-bootstrap";
type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  // явная вертикальная передача пропса, от родительского к дочернему

  const { removeCartQuantity } = useShoppingCart(); // вертикальная передача пропс из контекста (провайдер), где уже все типизированно

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  //&times; krestik
  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img src={item.img} style={{ width: "70px", height: "110px" }} />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".9rem" }}>
              x{quantity}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: ".9rem" }}>
          {item.price}
        </div>
      </div>

      <div>{item.price * quantity}</div>
      <Button
        variant="outline-danger"
        onClick={() => removeCartQuantity(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
