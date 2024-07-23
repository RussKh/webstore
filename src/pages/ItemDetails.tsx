import { useParams } from "react-router-dom";
import items from "../data/items.json";

import Carousel from "react-bootstrap/Carousel";

export function ItemDetails() {
  let { id } = useParams();
  let product = items.find((item) => item.id === Number(id));
  if (!product) return <div>Not found</div>;
  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <h1>{id}</h1>
        <h1>{product.name}</h1>
        <h1>About text goes here</h1>
      </div>

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img src={product.img} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={product.img2} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
