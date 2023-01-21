import { useClothing } from "../../../features/Components/Clothing";
import Filters from "./Filters/Filters";
import ClothingCSS from "../Shop.module.scss";

const Clothing = () => {
  const { displayItems, itemsInStock, setFilterItems } = useClothing();

  return (
    <section className={ClothingCSS.clothingContainer}>
      <Filters items={itemsInStock} setItems={setFilterItems} />
      <div className={ClothingCSS.itemContainer}>{displayItems}</div>
    </section>
  );
};

export default Clothing;
