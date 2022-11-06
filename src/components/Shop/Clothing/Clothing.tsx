import { useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";
import DisplayItem from "./DisplayItem";
import Filters from "./Filters/Filters";
import ClothingCSS from "../Shop.module.scss";

const Clothing = () => {
  const itemsInStock = useAppSelector(
    (state) => state.reducers.itemsInStock.currentItems
  );
  const [filterItems, setFilterItems] = useState(itemsInStock);

  const displayItems = filterItems.map((item) => (
    <article key={item.id} className={ClothingCSS.item}>
      <DisplayItem
        id={item.id}
        name={item.name}
        stock={item.stock}
        sizes={item.sizes}
        price={item.price}
        image={item.image}
        type={item.type}
      />
    </article>
  ));

  useEffect(() => {
    setFilterItems(itemsInStock);
  }, [itemsInStock]);

  return (
    <div className={ClothingCSS.clothingContainer}>
      <Filters items={itemsInStock} setItems={setFilterItems} />
      <div className={ClothingCSS.itemContainer}>{displayItems}</div>
    </div>
  );
};

export default Clothing;
