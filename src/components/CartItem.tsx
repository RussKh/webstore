import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import storeItems from "../data/items.json";
import Stack from "react-bootstrap/Stack";
import {Button, ButtonGroup} from "react-bootstrap";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({id, quantity}: CartItemProps) {
    // явная вертикальная передача пропса, от родительского к дочернему

    const {removeCartQuantity, increaseCartQuantity, decreaseCartQuantity} =
        useShoppingCart(); // вертикальная передача пропс из контекста (провайдер), где уже все типизированно

    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={3}
               className="d-flex align-items-center">
            <div className="me-auto">
                <img src={item.img} style={{width: "100px", height: "110px"}}/>
                {item.name}{" "}
                <span className="text-muted mr-2" style={{fontSize: ".9rem"}}>
          {item.price} &times;
        </span>
                {quantity > 0 && (
                    // <span className="text-muted" style={{ fontSize: ".9rem" }}>
                    //   &times;{quantity}
                    // </span>

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
                            <Button variant="outline-secondary"
                                    className="non-reactive">
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
