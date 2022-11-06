import { ItemProps } from "../../../../types";
import FiltersCSS from "./Filters.module.scss";

interface Props {
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

const Filters = ({ items, setItems }: Props) => {
  const filterByType = (type: "Shirt" | "Jean" | "") => {
    const itemByType = items.filter((item) => item.name.includes(type));
    setItems(itemByType);
  };

  const filterBySize = (size: "S" | "M" | "L") => {
    const itemsBySize = items.filter((item) => item.sizes.includes(size));
    setItems(itemsBySize);
  };

  return (
    <div className={FiltersCSS.container}>
      <div>
        <h3>SIZE</h3>
        <button onClick={() => filterBySize("S")}>Size: S</button>
        <button onClick={() => filterBySize("M")}>Size: M</button>
        <button onClick={() => filterBySize("L")}>Size: L</button>
      </div>

      <div>
        <h3>TYPE</h3>
        <button onClick={() => filterByType("Shirt")}>By: Shirt</button>
        <button onClick={() => filterByType("Jean")}>By: Jean</button>
        <button onClick={() => filterByType("")}>Show all</button>
      </div>
    </div>
  );
};

export default Filters;
