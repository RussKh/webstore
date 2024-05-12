import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import storeItems from "../data/items.json";
import {CartItem} from "./CartItem.tsx";
import {formatterCurrency} from "../currency/CurrencyFormater.ts";

type cartProps = {
    isOpen: boolean;
};

export function Cart({isOpen}: cartProps) {
    const {closeCart, cartItems} = useShoppingCart();
    const totalInCart = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <Offcanvas
            show={isOpen}
            onHide={closeCart}
            aria-controls="offcanvasWithBackdrop"
            placement="end"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}


                    <div className="fw-bold fs-4">


                        {totalInCart > 0 ? `Total ${formatterCurrency(totalInCart)}` :
                            <div>
                                <h3>Cart is
                                    empty</h3><h5
                                className="text-muted">(but it doesn't have
                                to be)</h5></div>}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
