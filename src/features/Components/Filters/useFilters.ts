import { ItemProps } from "../../../types";

interface Props {
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

export const useFilters = ({ items, setItems }: Props) => {
  const filterByType = (type: "Shirt" | "Jean" | "") => {
    const itemByType = items.filter((item) => item.name.includes(type));
    setItems(itemByType);
  };

  const filterBySize = (size: "S" | "M" | "L") => {
    const itemsBySize = items.filter((item) => item.sizes.includes(size));
    setItems(itemsBySize);
  };

  return {
    filterByType,
    filterBySize,
  };
};
