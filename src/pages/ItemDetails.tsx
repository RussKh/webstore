import { useParams } from "react-router-dom";
import items from "../data/items.json";

export function ItemDetails() {
  let { id } = useParams();
  let name = items.find((item) => item.id === Number(id));
  if (!name) return <div>Not found</div>;
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name.name}</h1>
      <h1>About text goes here</h1>
    </div>
  );
}
