import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import DisplayItem from "../../../components/Shop/Clothing/DisplayItem";

export const useClothing = () => {
  const itemsInStock = useAppSelector(
    (state) => state.reducers.itemsInStock.currentItems
  );
  const [filterItems, setFilterItems] = useState(itemsInStock);

  const displayItems = filterItems.map((item) => (
    <DisplayItem
      key={item.id}
      id={item.id}
      name={item.name}
      stock={item.stock}
      sizes={item.sizes}
      price={item.price}
      image={item.image}
      type={item.type}
    />
  ));

  useEffect(() => {
    setFilterItems(itemsInStock);
  }, [itemsInStock]);

  return { displayItems, itemsInStock, setFilterItems };
};
