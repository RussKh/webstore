import { Button, Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  features: string[];
};

export function StoreItem({ id, name, price, img, features }: StoreItemProps) {
  const quantity = 0;

  return (
    <Card className="m-3 border-secondary rounded-0">
      <Card.Img
        variant="top"
        src={img}
        style={{ objectFit: "contain" }}
        height="250px"
        width="125px"
      />
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title className="d-flex justify-content-between mb-3">
            <span className="fs-3">{name}</span>
            <span className="text-muted fs-5">${price}</span>
          </Card.Title>
          <Card.Text>
            <h4>Key features:</h4>
            <ul>
              {features.map((feature: string) => (
                <li>{feature}</li>
              ))}
            </ul>
          </Card.Text>
        </div>

        <div className="mb-1">
          {quantity === 0 ? (
            <Button variant="outline-secondary" className="w-100">
              Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5em" }}
            >
              <div
                className="d-flex justify-content-center"
                style={{ gap: "0.5em" }}
              >
                <Button variant="outline-secondary"> - </Button>

                <div>
                  <span className="fs-4">{quantity}</span>
                </div>

                <Button variant="outline-secondary"> + </Button>
              </div>

              <Button variant="outline-danger">REMOVE</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

// состояние чтобы хранить то, что пользователь ввел в инпут
// отступ между search and cards
// useeffect
